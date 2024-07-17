import React from 'react';
import ResumePage from '../frontend/UI/resumepage';
import Footer from '../frontend/UI/footers/footer';
import ResumeHeader from '../frontend/UI/headers/resume-header';
//import Template from '../frontend/UI/template';

function Resume() {
    return (
        <>
            <ResumeHeader />
            {
                //<Template />
            }
            <ResumePage />
            <Footer />
        </>
    );
}

export default Resume;