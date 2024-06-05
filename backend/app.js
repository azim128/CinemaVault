import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db_config.js";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/send-email", async (req, res) => {
//   const { email } = req.body;
//   const verificationCode = "123456"; // Changed to an array
//   const subject = "Welcome to our platform!";
//   const html = verificationMail(verificationCode);

//   const result = await sendEmail(email, subject, html);

//   if (result) {
//     res.send("Email sent successfully!");
//   } else {
//     res.send("Failed to send email!"); // Moved this line inside the else block
//   }
// });

app.get("/health", (req, res) => {
  res.send("OK!");
});

// global error handler if any middleware throws an error
app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    res.status(500).send("Something broke!");
  }
});
const port = 3000;
// if db connect then run the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
