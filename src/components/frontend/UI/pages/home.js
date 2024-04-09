import React from 'react';
import Header from '../headers/main-header';
import Cards from '../../UI/cards/cards';
import Footer from '../footers/footer';
import Affirmation from '../../API/affirmation';
//import FloatingButton from '../floatingButton';

function home() {
    return (
        <>
            <Header />
            <Cards />
            <Affirmation />
            <Footer />
        </>
    );
}

export default home;