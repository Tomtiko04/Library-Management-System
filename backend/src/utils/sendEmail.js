const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: `Your Library <${process.env.EMAIL_USERNAME}>`,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;