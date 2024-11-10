const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const path = require("path");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: "Gmail", // Replace with your email service
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Adjust the path if needed
});

// app.post("/contact", (req, res) => {
//   const { name, email, subject, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: process.env.MAIL_USER, // Your email to receive the messages
//     subject: subject || `New Contact Form Message from ${name}`,
//     text: `You have received a new message from ${name} (${email}):\n\n${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ message: "Failed to send email" });
//     } else {
//       console.log("Email sent:", info.response);
//       res.status(200).send(`
//       <html>
//         <head><title>Success</title></head>
//         <body>
//           <h1>Your message has been sent successfully!</h1>
//           <p>Thank you for contacting😊.</p>
//         </body>
//       </html>`);
//       // .json({ message: "Your message has been sent successfully!" });
//       // toast.success('Your message has been sent successfully!');
//     }
//   });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
