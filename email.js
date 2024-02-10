// email.js
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.use(express.json());

// Read authentication details from the text file
const file = path.join(__dirname, '../public/auth.txt');
const auth = fs.readFileSync(file, 'utf-8').split('\n');
const user = auth[0].trim();
const pass = auth[1].trim();

// Endpoint for sending email
router.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  });

  // Configure the email message
  const mailOptions = {
    from: user,
    to: email,
    subject: 'New Email from Contact Form',
    text: `
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    } 
    else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

module.exports = router;
