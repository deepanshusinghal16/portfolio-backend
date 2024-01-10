const nodemailer = require('nodemailer');
require('dotenv').config();

const mailSender = async (email, name, body) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        let info = await transporter.sendMail({
            from: "Deepanshu Singhal",
            to: `${email}`,
            subject: `${name}`,
            html: `${body}`,
        });
        return info;
    } catch (e) {
        console.log("Error", e);
        return null;
    }
};

module.exports = mailSender;
