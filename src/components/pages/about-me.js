import React from 'react';
import AboutHeader from '../frontend/UI/headers/about-header';
import Footer from '../frontend/UI/footers/footer';
import AboutCarousel from '../frontend/UI/carousels/about-carousel';
import PokemonGrid from '../frontend/UI/pokemon/pokemonGrid';
import IGDB from '../frontend/API/IGDB';
//import Fruit from '../../API/fruit';
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