import React, { useState, useEffect } from 'react';
import { Darklight } from './toggle/darklight';
import { useCookies } from 'react-cookie';
import { fetchPdf } from '../pdf';
import Download from './buttons/download';

function ResumePage() {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  const [pdfSrc, setPdfSrc] = useState('');

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />;
  
  useEffect(() => {
    async function fetchData() {
      const pdfUrl = await fetchPdf();
      if (pdfUrl) {
        setPdfSrc(pdfUrl);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <div>
        <Download pdfSrc={pdfSrc} darkMode={darkMode} />
      </div>
    </>
  );
}

export default ResumePage;
