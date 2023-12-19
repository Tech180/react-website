const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/send-email', (req, res) => {
  const { email, message } = req.body;

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'rileylawson00@gmail.com',
      pass: 'Replay888*',
    },
  });

  // Configure the email message
  const mailOptions = {
    from: 'rileylawson00@gmail.com',
    to: email, // Use the 'email' parameter as the recipient email address
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
