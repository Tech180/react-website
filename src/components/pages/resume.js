import React from 'react';
//import ResumePage from '../resumepage';
import Footer from '../frontend/UI//footers/footer';
import ResumeHeader from '../frontend/UI/headers/resume-header';
import Template from '../frontend/UI/template';
import Projects from '../frontend/UI/projects';

function Resume() {
    return (
        <>
            <ResumeHeader />
            <Template />
            <Projects />
            <Footer />
        </>
    );
}

export default Resume;