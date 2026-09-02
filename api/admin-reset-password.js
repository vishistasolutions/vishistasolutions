const { verifyResetToken, saveCredentialsToDatabase } = require('./auth-helper');

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

    const { resetToken, otp, newPassword } = body;

    if (!resetToken) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'Invalid or missing reset token.' }));
    }

    if (!newPassword || String(newPassword).length < 6) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: 'New password must be at least 6 characters long.' }));
    }

    const verification = verifyResetToken(resetToken, otp);
    if (!verification.valid) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: verification.message }));
    }

    // Permanently save new password in database
    await saveCredentialsToDatabase(newPassword);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
        success: true,
        email: verification.email,
        message: 'Password successfully updated in database! Old password is now invalid.'
    }));
};
