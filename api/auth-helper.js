const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { createClient } = require('@supabase/supabase-js');

// Load env variables
function loadEnv() {
    const envPaths = [
        path.join(process.cwd(), '.env.local'),
        path.join(process.cwd(), '.env')
    ];
    for (const envPath of envPaths) {
        if (fs.existsSync(envPath)) {
            const content = fs.readFileSync(envPath, 'utf8');
            content.split('\n').forEach(line => {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
                    const idx = trimmed.indexOf('=');
                    const key = trimmed.substring(0, idx).trim();
                    let val = trimmed.substring(idx + 1).trim();
                    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                        val = val.substring(1, val.length - 1);
                    }
                    if (!process.env[key]) {
                        process.env[key] = val;
                    }
                }
            });
        }
    }
}
loadEnv();

const JWT_SECRET = process.env.JWT_SECRET || 'vishista_secure_admin_jwt_secret_2026';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || 'pm.rakeshk@gmail.com';
const SMTP_PASSWORD = (process.env.SMTP_PASSWORD || 'nxadanbajdyxgkcz').replace(/\s+/g, '');
const SMTP_FROM = process.env.SMTP_FROM || `"Vishista Admin" <${SMTP_USER}>`;

// ONLY THIS EMAIL IS ALLOWED FOR FORGOT PASSWORD RESET
const TARGET_ADMIN_EMAIL = 'pm.rakeshk@gmail.com';

// Supabase DB Client (Used strictly as a persistence layer, completely independent of Supabase Auth)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oseccrcffoyttjgpazrt.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

let supabaseDb = null;
try {
    supabaseDb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
    console.warn('Could not initialize Supabase DB client:', e.message);
}

function getTransporter() {
    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD
        }
    });
}

function hashPassword(password) {
    return crypto.createHash('sha256').update(String(password).trim() + JWT_SECRET).digest('hex');
}

// Generate secure 6-digit OTP
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Create HMAC signature token for link & OTP verification (valid for 15 minutes)
function createResetToken(email, otp) {
    const expiresAt = Date.now() + 15 * 60 * 1000; // 15 minutes
    const data = `${email.toLowerCase()}:${otp}:${expiresAt}`;
    const hmac = crypto.createHmac('sha256', JWT_SECRET).update(data).digest('hex');
    return Buffer.from(JSON.stringify({ email: email.toLowerCase(), expiresAt, hmac, otp })).toString('base64');
}

// Verify reset token (supports link click or OTP input)
function verifyResetToken(token, inputOtp) {
    try {
        const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf8'));
        const { email, expiresAt, hmac, otp } = decoded;

        if (Date.now() > expiresAt) {
            return { valid: false, message: 'This password reset link/OTP has expired. Please request a new one.' };
        }

        // If inputOtp was supplied, check it matches
        if (inputOtp && String(inputOtp).trim() !== String(otp).trim()) {
            return { valid: false, message: 'Invalid OTP code. Please check your email or request a new code.' };
        }

        const expectedData = `${email}:${otp}:${expiresAt}`;
        const expectedHmac = crypto.createHmac('sha256', JWT_SECRET).update(expectedData).digest('hex');

        if (hmac !== expectedHmac) {
            return { valid: false, message: 'Invalid or forged reset token.' };
        }

        return { valid: true, email };
    } catch (e) {
        return { valid: false, message: 'Invalid or corrupted reset link.' };
    }
}

// Local file fallback
const CREDENTIALS_FILE = path.join(process.cwd(), 'data', 'admin_credentials.json');

// Fetch credentials from Database (website_settings) or local file
async function getStoredCredentials() {
    // 1. Try DB first
    if (supabaseDb) {
        try {
            const { data } = await supabaseDb.from('website_settings').select('*').limit(1);
            if (data && data.length > 0 && data[0].keywords) {
                const parsed = JSON.parse(data[0].keywords);
                if (parsed && parsed.admin_password_hash) {
                    return parsed;
                }
            }
        } catch (e) {}
    }

    // 2. Try local file
    try {
        if (fs.existsSync(CREDENTIALS_FILE)) {
            const raw = fs.readFileSync(CREDENTIALS_FILE, 'utf8');
            return JSON.parse(raw);
        }
    } catch (e) {}

    // Default: admin123
    return {
        admin_password_hash: hashPassword('admin123'),
        email: TARGET_ADMIN_EMAIL,
        updated_at: new Date().toISOString()
    };
}

// Store credentials in Database (so old password is permanently invalid)
async function saveCredentialsToDatabase(newPassword) {
    const hash = hashPassword(newPassword);
    const creds = {
        admin_password_hash: hash,
        email: TARGET_ADMIN_EMAIL,
        updated_at: new Date().toISOString()
    };

    // 1. Save to Database
    if (supabaseDb) {
        try {
            const { data } = await supabaseDb.from('website_settings').select('id').limit(1);
            if (data && data.length > 0) {
                await supabaseDb.from('website_settings').update({
                    keywords: JSON.stringify(creds)
                }).eq('id', data[0].id);
            } else {
                await supabaseDb.from('website_settings').insert([{
                    site_name: 'Vishista Office Solutions',
                    keywords: JSON.stringify(creds)
                }]);
            }
        } catch (e) {
            console.error('Failed to update DB credentials:', e.message);
        }
    }

    // 2. Save to local files (data/ and public/data/)
    try {
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
        fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(creds, null, 2), 'utf8');

        const pubDataDir = path.join(process.cwd(), 'public', 'data');
        if (fs.existsSync(pubDataDir)) {
            fs.writeFileSync(path.join(pubDataDir, 'admin_credentials.json'), JSON.stringify(creds, null, 2), 'utf8');
        }
    } catch (e) {}

    return creds;
}

// Check if provided password is valid against the database
async function verifyAdminPassword(password) {
    const creds = await getStoredCredentials();
    const hash = hashPassword(password);
    return hash === creds.admin_password_hash;
}

module.exports = {
    TARGET_ADMIN_EMAIL,
    getTransporter,
    generateOtp,
    createResetToken,
    verifyResetToken,
    getStoredCredentials,
    saveCredentialsToDatabase,
    verifyAdminPassword,
    SMTP_USER,
    SMTP_FROM
};
