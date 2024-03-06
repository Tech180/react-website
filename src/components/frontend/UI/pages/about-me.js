import React from 'react';
import AboutHeader from '../headers/about-header';
import Footer from '../../footer';
import AboutCarousel from '../../about-carousel';
import PokemonGrid from '../../pokemon/pokemonGrid';
import IGDB from '../../games/IGDB';
import Fruit from '../../fruit';
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