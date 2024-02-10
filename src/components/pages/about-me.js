import React from 'react';
import '../../App.css';
import AboutHeader from '../about-header';
//import Cards2 from '../about-cards';
import Footer from '../footer';
import Carousels from '../carousels';
import PokemonCarousel from '../pokemonCarousel';
//import Music from '../music';

function AboutMe() {
    return (
        <>
            <AboutHeader />
            <Carousels />
            <PokemonCarousel/>
            <Footer />
        </>
    );
}

export default AboutMe;