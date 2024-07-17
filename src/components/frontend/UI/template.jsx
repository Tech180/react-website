import React, { useState, useEffect } from 'react';
import { Darklight } from './toggle/darklight';
import { fetchPdf } from '../pdf';
import Download from './buttons/download';
import Background from './resume/background';
import DarkSwitch from './toggle/darkswitch';

function ResumePage() {
  const [darkMode] = DarkSwitch();
  const [pdfSrc, setPdfSrc] = useState('');

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
      <Background />
      <div>
        <Download pdfSrc={pdfSrc} darkMode={darkMode} />
      </div>
    </>
  );
}

export default ResumePage;
