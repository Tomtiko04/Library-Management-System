const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../config.env") });

// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: `Your Library <${process.env.EMAIL_USERNAME}>`,
//     to: options.to,
//     subject: options.subject,
//     text: options.text,
//   };

//   // Send the email
//   await transporter.sendMail(mailOptions);
// };


const sendEmail = async (options) => {
	try {
		const transporter = nodemailer.createTransport({
			service: "Gmail",
			host: process.env.EMAIL_HOST,
			port: process.env.EMAIL_PORT,
			secure: true,
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
		const info = await transporter.sendMail(mailOptions);
		console.log(`✅ Email sent to ${options.to} | Message ID: ${info.messageId}`);
	} catch (error) {
		console.error(`❌ Failed to send email to ${options.to}:`, error.message);
		throw new Error("Failed to send verification email.");
	}
  
};

module.exports = sendEmail;