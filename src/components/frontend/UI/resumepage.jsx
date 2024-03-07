import React, { useState, useEffect } from 'react';
import ResumeItem from './resumeItem';
import { Darklight } from './toggle/darklight';
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

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
  

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

  const styles = () => (
    <style jsx>{`
      .download-container,
      .download-container-dark {
        display: flex;
        justify-content: center;
        background-color: #F4F4F4;
        position: relative;
        padding-bottom: 4rem;
      }
    
      .download-container-dark {
        background-color: #242424;
      }
      
      /* Small Line Divider */
      .download-container::after,
      .download-container-dark::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 1px;
        background-color: #242424;
      }
    
      .download-container-dark::after {
        background-color: #F4F4F4;
      }
      
      /* Removes underline from download button */
      .download-container a,
      .download-container-dark a {
        text-decoration: none;
      }
      
      .download-button,
      .download-button-dark {
        padding: 8px 20px;
        border-radius: 2px;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        color: #242424;
        border: 1px solid #242424;
        transition: all 0.3s ease-out;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
      }
    
      .download-button-dark {
        color: #F4F4F4;
        border: 1px solid #F4F4F4;
      }
      
      .download-button:hover,
      .download-button-dark:hover {
        background: #242424;
        color: #F4F4F4;
        border: 1px solid #9AC2E6;
        transition: all 0.3s ease-out;
      }
    
      .download-button-dark:hover {
        background: #F4F4F4;
        color: #242424;
        border: 1px solid #B39DDB;
      }
      
      .download-button i,
      .download-button-dark i {
        margin-right: 8px;
      }
      
      /* PDF Icon */
      .fa-file-pdf {
        margin-right: 0.5rem;
      }
    
      .resumecard,
      .resumecard-dark {
        padding: 4rem;
        background: #F4F4F4;

      }
    
      .resumecard-dark {
        background: #242424;
      }

      @media (max-width: 5120px) {
        .resumecard,
        .resumecard-dark {
          padding: 10rem;
        }
      }

      @media (max-width: 1024px) {
        .resumecard,
        .resumecard-dark {
          padding: 10rem;
        }
      }
    
      @media (max-width: 750px) {
        .resumecard,
        .resumecard-dark {
          padding: 3rem;
        }
      }
    
      @media (max-width: 450px) {
        .resumecard,
        .resumecard-dark {
          padding: 1.5rem;
        }
      }
    `}</style>
  );

  return (
    <>
      <div>
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

      {styles()}
    </>
  );
}

export default ResumePage;
