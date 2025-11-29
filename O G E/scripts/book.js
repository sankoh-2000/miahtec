const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/book', async(req, res) => {
    const { name, email, date, message } = req.body;

    const userMail = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Booking Confirmation',
        text: `Hi ${name}, your booking for ${date} is confirmed!`,
    };

    const adminMail = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: 'New Booking Received',
        text: `New booking from ${name} (${email}) on ${date}.\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(userMail);
        await transporter.sendMail(adminMail);
        res.status(200).json({ message: 'Booking confirmed and email sent!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Email failed to send.' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});