import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db_config.js";
import { AppError, globalErrorHandler, notFoundHandler } from "./middlewares/errorHandlers.middleware.js";
import { error, success } from "./middlewares/responseHandler.middleware.js";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// add router


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
// Example route that triggers an error

app.get("/health", (req, res) => {
  success(res, "Server Running", "OK!" );
});


// Not found handler
app.use(notFoundHandler);

// Global error handler
app.use(globalErrorHandler);


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
