import React from 'react';
import AboutHeader from '../headers/about-header';
import Footer from '../footers/footer';
import AboutCarousel from '../../UI/carousels/about-carousel';
import PokemonGrid from '../pokemon/pokemonGrid';
import IGDB from '../../API/IGDB';
import Fruit from '../../API/fruit';
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