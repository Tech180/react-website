import React from 'react';
import '../../App.css';
import Header from '../header';
import Cards from '../cards';
import Footer from '../footer';
//import FloatingButton from '../floatingButton';

function home() {
    return (
        <>
            <Header />
            <Cards />
            <Footer />
        </>
    );
}

export default home;