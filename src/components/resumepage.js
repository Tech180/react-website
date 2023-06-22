import React, { useState, useEffect } from 'react';
import ResumeItem from './resumeItem';
import './resumepage.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

function ResumePage() {
  const [pdfSrc, setPdfSrc] = useState('');
  const [imageSrc, setImageSrc] = useState('');

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
  

  useEffect(() => {
    async function fetchPdfAndImage() {
      try {
        const pdfResponse = await fetch('/resume/Riley_Lawson.pdf');
        const pdfBlob = await pdfResponse.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfSrc(pdfUrl);

        const imageResponse = await fetch('/images/Riley_Lawson.png');
        const imageBlob = await imageResponse.blob();
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageSrc(imageUrl);
      } 
      catch (error) {
        console.error('Error fetching PDF and image:', error);
      }
    }

    fetchPdfAndImage();
  }, []);

  return (
    <div>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      <div className={darkMode ? 'resumecard-dark' : 'resumecard'}>
        <ResumeItem
          src={imageSrc}
          text="Click to expand to full view of my resume!"
        />
      </div>
      <div className={darkMode ? 'download-container-dark' : 'download-container'}>
        <a href={pdfSrc} download="Resume.pdf" className={darkMode ? 'download-button-dark' : 'download-button'}>
          <i className='far fa-file-pdf'></i> Download PDF
        </a>
      </div>
    </div>
  );
}

export default ResumePage;
