// Automated Keep-Alive Cron to prevent Supabase Free Tier from pausing/sleeping
const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oseccrcffoyttjgpazrt.supabase.co';
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zZWNjcmNmZm95dHRqZ3BhenJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTM4OTEsImV4cCI6MjEwMzMyOTg5MX0.ESJ0iK2zcCPZZCZtfeYW7uObbEP7JxXUYJiSi9a4pzA';

    try {
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        // Perform a lightweight query to wake/keep active
        const { data, error } = await supabase.from('categories').select('id').limit(1);

        if (error) {
            throw error;
        }

        return res.status(200).json({
            success: true,
            status: 'Supabase heartbeat active',
            timestamp: new Date().toISOString(),
            recordCount: data ? data.length : 0
        });
    } catch (err) {
        console.error('Supabase keep-alive ping error:', err.message);
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
};
