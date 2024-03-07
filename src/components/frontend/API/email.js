import React, { useState, useEffect, useRef } from 'react';
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './email.css';
import { Darklight } from '../UI/toggle/darklight';
import { useCookies } from 'react-cookie';

export default function Email() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_1d0vx78', e.target, 'hsykmYeNpceISsM-g')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!');
        setError(null);
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
        <div className={darkMode ? 'form-group-dark' : 'form-group'}>
          <label className={darkMode ? 'form-label-dark' : 'form-label'}>Name:</label>
            <textarea
              className={darkMode ? 'form-control-dark textarea-dark' : 'form-control textarea'}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              rows="1"
            ></textarea>
        </div>

          <div className={darkMode ? 'form-group-dark' : 'form-group'}>
          <label className={darkMode ? 'form-label-dark' : 'form-label'}>Email Address:</label>
              <textarea
                className={darkMode ? 'form-control-dark textarea-dark' : 'form-control textarea'}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                rows="1"
              ></textarea>
          </div>
          <div className={darkMode ? 'form-group-dark' : 'form-group'}>
            <label className={darkMode ? 'form-label-dark' : 'form-label'}>Subject:</label>
              <textarea
                className={darkMode ? 'form-control-dark textarea-dark' : 'form-control textarea'}
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                rows="1"
              ></textarea>
          </div>
          <div className={darkMode ? 'form-group-dark' : 'form-group'}>
            <label className={darkMode ? 'form-label-dark' : 'form-label'}>Message:</label>
              <textarea
                className={darkMode ? 'form-control-dark textarea-dark' : 'form-control textarea'}
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="8"
              ></textarea>
          </div>
          <div>
            <button className={darkMode ? 'contact-btn-dark btn-info-dark' : 'contact-btn btn-info'} type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
      {error && <p>{error}</p>}
      <ToastContainer />
    </div>
  );
}
