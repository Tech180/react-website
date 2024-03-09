import React from 'react';

const Download = ({ pdfSrc, darkMode }) => {
  const buttonStyle = darkMode ? 'download-button-dark' : 'download-button';
  const containerStyle = darkMode ? 'download-container-dark' : 'download-container';

  return (
    <div className={containerStyle}>
        <a href={pdfSrc} download="Resume.pdf" className={buttonStyle}>
            <i className='far fa-file-pdf'></i> Download PDF
        </a>
        <style jsx>{`
            .download-container,
            .download-container-dark {
                display: flex;
                justify-content: center;
                background-color: #F4F4F4;
                position: relative;
                padding-top: 4rem;
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
        `}</style>
    </div>
  );
};

export default Download;
