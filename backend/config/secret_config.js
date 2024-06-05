import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
const resendKey = process.env.RESEND_KEY;

const smtp_server = process.env.SMTP_SERVER;
const smtp_port = process.env.SMTP_PORT;
const smtp_username = process.env.SMTP_USERNAME;
const smtp_password = process.env.SMTP_PASSWORD;
const smtp_from_email = process.env.SMTP_FROM_EMAIL;

const connectionString = `${mongoURI}/${dbName}`;

export {
  connectionString,
  resendKey,
  smtp_from_email,
  smtp_password,
  smtp_port,
  smtp_server,
  smtp_username,
};
