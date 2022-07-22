import { MailAdapter, SendmailData } from "../adapters/mail.adapter";
import nodemailer from 'nodemailer'
 
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "75ae1a6541df98",
      pass: "cc355f4bfe2a97"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendmailData) {
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget@.com",
        to: "Edson Gabriel <edsongabrielmj@gmail.com>",
        subject,
        html: body,  

        // [
        //     `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        //     `<p>Tipo de feedback: ${type}</p>`,
        //     `<p>Comentário: ${comment}</p>`,
        //     `</div>`
        // ].join('\n')
    })


   };
}