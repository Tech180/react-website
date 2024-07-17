import React from 'react';
import Header from '../frontend/UI/headers/main-header';
import Cards from '../frontend/UI/cards/cards';
import Footer from '../frontend/UI/footers/footer';
import Affirmation from '../frontend/API/affirmation';
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