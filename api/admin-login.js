const { TARGET_ADMIN_EMAIL, verifyAdminPassword } = require('./auth-helper');

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
    const password = body.password || '';

    // Allowed login emails
    const allowedEmails = [
        TARGET_ADMIN_EMAIL.toLowerCase(),
        'admin@vishista.com',
        'kvramana.reddy@vishistaofficesolutions.com'
    ];

    if (!allowedEmails.includes(email)) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Invalid email or unauthorized admin.' }));
    }

    // Verify password strictly against database
    const isValid = await verifyAdminPassword(password);
    if (!isValid) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Invalid password. Please try again or use Forgot Password.' }));
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
        success: true,
        email,
        message: 'Admin authentication successful'
    }));
};
