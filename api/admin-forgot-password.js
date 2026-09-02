const { TARGET_ADMIN_EMAIL, getTransporter, generateOtp, createResetToken, SMTP_FROM } = require('./auth-helper');

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        return res.end();
    }

    if (req.method !== 'POST') {
        res.statusCode = 405;
        return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }

    let body = {};
    if (typeof req.body === 'object' && req.body !== null) {
        body = req.body;
    } else if (typeof req.body === 'string') {
        try { body = JSON.parse(req.body); } catch (e) {}
    } else {
        const buffers = [];
        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const data = Buffer.concat(buffers).toString();
        try { body = JSON.parse(data); } catch (e) {}
    }

    const email = (body.email || '').trim().toLowerCase();

    if (!email) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Please enter your email address.' }));
    }

    // STRICT CHECK: ONLY pm.rakeshk@gmail.com
    if (email !== TARGET_ADMIN_EMAIL.toLowerCase()) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({
            error: `Password reset is restricted to the authorized management email: ${TARGET_ADMIN_EMAIL}`
        }));
    }

    const otp = generateOtp();
    const resetToken = createResetToken(email, otp);

    // Compute Base URL for clickable link
    let origin = req.headers.origin || req.headers.referer;
    if (origin) {
        try {
            const parsed = new URL(origin);
            origin = `${parsed.protocol}//${parsed.host}`;
        } catch (e) {}
    }
    if (!origin && req.headers.host) {
        const proto = req.headers['x-forwarded-proto'] || 'https';
        origin = `${proto}://${req.headers.host}`;
    }
    if (!origin) {
        origin = 'https://vishistasolutions.vercel.app';
    }

    const resetLink = `${origin}/admin/?reset_token=${encodeURIComponent(resetToken)}`;

    const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f8fa; margin: 0; padding: 25px 15px; }
            .card { max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.07); border-top: 5px solid #d32f2f; }
            .header { padding: 32px 30px 15px; text-align: center; }
            .header h2 { margin: 0; color: #111111; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
            .header p { color: #666; font-size: 14px; margin-top: 5px; }
            .content { padding: 15px 32px 35px; color: #333333; font-size: 15px; line-height: 1.65; }
            .btn-container { text-align: center; margin: 28px 0; }
            .reset-btn { display: inline-block; background-color: #d32f2f; color: #ffffff !important; text-decoration: none; padding: 14px 34px; font-weight: 700; border-radius: 6px; font-size: 16px; box-shadow: 0 4px 12px rgba(211,47,47,0.3); }
            .otp-box { background: #fdf5f5; border: 1px dashed #d32f2f; border-radius: 8px; text-align: center; padding: 14px; margin: 20px 0 10px; }
            .otp-code { font-size: 28px; font-weight: 800; letter-spacing: 6px; color: #d32f2f; font-family: monospace; }
            .link-text { word-break: break-all; font-size: 12px; color: #777777; background: #f8f9fa; padding: 10px; border-radius: 6px; margin-top: 15px; }
            .footer { background: #fafafa; padding: 18px 30px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="header">
                <h2>Vishista Office Solutions</h2>
                <p>Admin Panel Management Security</p>
            </div>
            <div class="content">
                <p>Hello Management,</p>
                <p>A request was received to reset the password for your Vishista Admin CMS account (<strong>${email}</strong>).</p>
                
                <div class="btn-container">
                    <a href="${resetLink}" class="reset-btn" target="_blank">Reset Admin Password &rarr;</a>
                </div>

                <p style="text-align: center; font-size: 13px; color: #666; margin: 0 0 15px;">Or if you prefer entering a verification code:</p>
                <div class="otp-box">
                    <div class="otp-code">${otp}</div>
                    <small style="color: #888888; display: block; margin-top: 4px;">Valid for 15 minutes</small>
                </div>

                <p style="font-size: 13px; color: #666; margin-top: 25px;">If the button above does not open, copy and paste this link into your browser:</p>
                <div class="link-text">${resetLink}</div>

                <p style="font-size: 12px; color: #888888; margin-top: 20px; line-height: 1.5;">
                    Security Note: Once a new password is set, the previous password will be permanently disabled in the database. If you did not request this reset, please disregard this email.
                </p>
            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Vishista Office Solutions Pvt Ltd. All rights reserved.
            </div>
        </div>
    </body>
    </html>
    `;

    try {
        const transporter = getTransporter();
        await transporter.sendMail({
            from: SMTP_FROM,
            to: email,
            subject: `Vishista Admin - Reset Your Password`,
            html: emailHtml,
            text: `Reset your Vishista Admin password using this link: ${resetLink}\n\nOr use verification code: ${otp}`
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({
            success: true,
            resetToken,
            message: `Reset password link has been sent to ${email}`
        }));
    } catch (err) {
        console.error('Nodemailer SMTP Error:', err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({
            error: `Failed to send email via SMTP: ${err.message}`
        }));
    }
};
