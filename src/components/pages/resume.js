import React from 'react';
import '../../App.css';
import ResumePage from '../resumepage';
import Footer from '../footer';
import ResumeHeader from '../resume-header';

function Resume() {
    return (
        <>
            <ResumeHeader />
            <ResumePage />
            <Footer />
        </>
    );
}

export default Resume;