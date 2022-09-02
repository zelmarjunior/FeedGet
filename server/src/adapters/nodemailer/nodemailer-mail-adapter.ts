import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3afd66f7c5347b",
        pass: "bcf86866174aef"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedback System",
            to: "Zelmar <zelmar.junior1@gmail.com>",
            subject: subject,
            html: body,
        })
    }
}