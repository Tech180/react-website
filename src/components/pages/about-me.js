import React from 'react';
import '../../App.css';
import AboutHeader from '../about-header';
//import Cards2 from '../about-cards';
import Footer from '../footer';
import Carousels from '../carousels';

function AboutMe() {
    return (
        <>
            <AboutHeader />
            <Carousels />
            <Footer />
        </>
    );
}

export default AboutMe;