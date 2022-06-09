import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv/config";

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/sendmail", (req, res) => {

    async function main() {
        const transpoter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'ansshour@mail.ru',
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        let info = await transpoter.sendMail({
            from: 'Russian Turbine <ansshour@mail.ru>',
            to: "andrey.zhukov100@mail.ru",
            subject: "test",
            text: "test",
            html: "<b>test</b>",
        });
    }

    main().catch(console.error);
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} PORT`)
})