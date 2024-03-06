import React from 'react';
import '../../App.css';
import AboutHeader from '../about-header';
//import Cards2 from '../about-cards';
import Footer from '../footer';
import AboutCarousel from '../about-carousel';
import PokemonGrid from '../pokemonGrid';
import IGDB from '../IGDB';
import Fruit from '../fruit';
//import Music from '../music';

function AboutMe() {
    return (
        <>
            <AboutHeader />
            <AboutCarousel />
            <PokemonGrid />
            {<IGDB />
            }
            {//<Fruit />
            }
            <Footer />
        </>
    );
}

export default AboutMe;