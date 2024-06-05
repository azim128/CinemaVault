import nodemailer from "nodemailer";
import { smtp_from_email } from "./secret_config.js";

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: smtp_from_email,
      to: email,
      subject: subject,
      html: html,
    });
    console.log("Email sent successfully!");
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

// SMTP_CONFIG = {
//   SMTP_SERVER: "smtp.gmail.com",
//   SMTP_PORT: 587,
//   SMTP_USERNAME: "azimsajan256@gmail.com",
//   SMTP_PASSWORD: "kjvr kdkk rxwm lbbv",
//   SMTP_FROM_EMAIL: "azimruet28@gmail.com",
// };

// import {Resend} from "resend";
// import { resendKey } from "./secret_config.js";
// const resend = new Resend(resendKey);
// async function sendEmail(email, subject, html) {
//     const { data, error } = await resend.emails.send({
//         from: "Acme <onboarding@resend.dev>",
//         to: [email],
//         subject: subject,
//         html: html,
//     });
//     if (error) {
//         console.error("Failed to send email:", error);
//         return false;
//     }
//     return true;
// }

export default sendEmail;
