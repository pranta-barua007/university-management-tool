const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const GOOGLE_API_CREDS = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
};

const oAuth2Client = new google.auth.OAuth2(
  GOOGLE_API_CREDS.CLIENT_ID,
  GOOGLE_API_CREDS.CLIENT_SECRET,
  GOOGLE_API_CREDS.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: GOOGLE_API_CREDS.REFRESH_TOKEN });

const sendMail = async (email, secretToken, mode) => {
  try {
    const googleAccessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USERNAME,
        clientId: GOOGLE_API_CREDS.CLIENT_ID,
        clientSecret: GOOGLE_API_CREDS.CLIENT_SECRET,
        refreshToken: GOOGLE_API_CREDS.REFRESH_TOKEN,
        accessToken: googleAccessToken,
      },
    });

    if (mode == "OTP") {
      return await transport.sendMail({
        from: process.env.GMAIL_USERNAME,
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
