import React from 'react';
import ResumePage from '../resumepage';
import Footer from '../footers/footer';
import ResumeHeader from '../headers/resume-header';
import Template from '../template';

function Resume() {
    return (
        <>
            <ResumeHeader />
            <Template />
            <Footer />
        </>
    );
}

export default Resume;