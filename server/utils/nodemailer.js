const nodemailer = require("nodemailer");

const sendMail = async (email, secretToken, mode) => {
  try {
    const transport = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.HOTMAIL_USERNAME,
        pass: process.env.HOTMAIL_PASS,
      },
    });

    if (mode == "OTP") {
      return await transport.sendMail({
        from: process.env.HOTMAIL_USERNAME,
        to: email,
        subject: "OTP Submission",
        html: `
        <h1>Reset Password</h1>
        <p> Here is your otp to change the password ${secretToken} </p>
      `,
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = sendMail;
