import React from 'react';
import '../../App.css';
import AboutHeader from '../about-header';
//import Cards2 from '../about-cards';
import Footer from '../footer';
import Carousels from '../carousels';
import PokemonCarousel from '../pokemonCarousel';
import PokemonGrid from '../pokemonGrid';
//import Music from '../music';

function AboutMe() {
    return (
        <>
            <AboutHeader />
            <Carousels />
            <PokemonGrid/>
            <Footer />
        </>
    );
}

export default AboutMe;