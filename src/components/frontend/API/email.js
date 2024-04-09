import React, { useState, useEffect } from 'react';
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './email.css';
import { useCookies } from 'react-cookie';
import TextBox from "../UI/textbox";

export default function Email() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [cookies, ] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_1d0vx78', e.target, 'hsykmYeNpceISsM-g')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!');
        setError(null);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, 
      (error) => {
        console.log(error.text);
        setError('Failed to send the email...');
        toast.error('Failed to send the email...');
      });

    e.target.reset();
  };

  return (
    <div className={darkMode ? 'contact-container-dark' : 'contact-container'}>
      <h1 className={darkMode ? 'contact-page-heading-dark' : 'contact-page-heading'}>Contact Page</h1>
      <form onSubmit={sendEmail}>
        <div>
          <div className="form-group">
            <TextBox 
              text="Name" 
              value={name} 
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)} 
              rows={2}
            />
          </div>

          <div className="form-group">
            <TextBox 
              text="Email Address" 
              value={email}
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)} 
              rows={2}
            />
          </div>

          <div className="form-group">
            <TextBox 
              text="Subject" 
              value={subject} 
              name="subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)} 
              rows={2}
            />
          </div>

          <div className="form-group">
            <TextBox 
              text="Message" 
              value={message}
              name="message"
              type="text" 
              onChange={(e) => setMessage(e.target.value)} 
              rows={6}
            />
          </div>

          <button className={darkMode ? 'contact-btn-dark' : 'contact-btn'} type="submit">
            Send Message
          </button>

        </div>
      </form>
      {error && <p>{error}</p>}
      <ToastContainer />
    </div>
  );
}
