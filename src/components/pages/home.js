import React from 'react';
import '../../App.css';
import Hero from '../hero';
import Cards from '../cards';
import Footer from '../footer';
import FloatingButton from '../floatingButton';

function home() {
    return (
        <>
            <Hero />
            <Cards />
            <FloatingButton />
            <Footer />
        </>
    );
}

export default home;