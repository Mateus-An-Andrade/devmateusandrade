require('dotenv').config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

async function sendEmail(to,subject,text) {
    const mailOptions ={
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        text: text
    };

    try{
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado!: ' + info.response);
    } catch (error) {
        console.error("Erro ao enviar email:", error)
    }

}


module.exports = sendEmail;