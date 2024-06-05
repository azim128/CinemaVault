export const verificationMail = (verificationCode) => {
  return `<body style="font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #333; text-align: center;">Welcome to Our Website!</h2>
              <p style="color: #666; text-align: center;">Thank you for registering. To complete your registration, please verify your email address by entering the verification code below:</p>
              <div class="verification-code-container" style=" margin-bottom: 20px; text-align: center;">
                ${verificationCode
                  .split("")
                  .map(
                    (digit) =>
                      `<span style="display: inline-block; width: 40px; height: 40px; line-height: 40px; text-align: center; font-size: 18px; margin: 0 5px; border: 2px solid #333; border-radius: 5px;">${digit}</span>`
                  )}
              </div>
              <p style="color: #666; text-align: center;">If you did not register, you can safely ignore this email.</p>
              <a href="" class="cta-button" style="display: block; width: 200px; margin: 0 auto; padding: 10px 20px; text-align: center; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
            </div>
          </body>`;
};


