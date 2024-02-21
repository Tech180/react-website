import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Pokemon from './pokemon';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

const PokemonCarouselItem = ({ name, darkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`pokemon-carousel-item ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <Pokemon name={name} />

      <style jsx>{`
        .pokemon-carousel-item {
          margin-top: 1em;
          margin-bottom: 1em;
          margin-inline: 10%;
          max-width: 80%;
          max-height: 90%;
          height: 100%;
          position: relative;
          text-align: center;
          padding: 50px;
          border: 1px dashed ${darkMode ? '#F4F4F4' : '#242424'};
          border-radius: 50px;
          background: ${darkMode ? '#242424' : '#F4F4F4'};
          user-select: none;
          -webkit-user-drag: none;
          list-style-type: none;
          overflow: hidden;
          perspective: 1000px;
          transition: transform 0.5s;
        }

        .flipped {
          transform: rotateY(180deg);
        }
        
        .front, .back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .back {
          transform: rotateY(180deg);
        }

        @media (min-width: 2000px) {
          .carousel-item {
            height: 100%;
            margin-top: 1em;
            margin-bottom: 1em;
          }
        }

        @media (min-width: 1024px) {
          .carousel-item {
            height: 80%;
          }
        }

        @media (max-width: 450px) {
          .carousel-item {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const PokeAPIImage = () => {
  const handleClick = () => {
    window.open("https://github.com/PokeAPI/pokeapi");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <img 
        src="/images/pokeapi.svg" 
        alt="PokeAPI" 
        style={{ maxWidth: '200px', cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
};



const PokemonCarousel = () => {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  const pokemonNames = ['Cloyster', 'Flygon', 'Marowak', 'Zapdos', 'Serperior'];

  const responsive = {
    ultrawide: {
      breakpoint: { max: 5124, min: 2500 },
      items: 4,
      slidesToSlide: 1,
    },
    largedesktop: {
      breakpoint: { max: 2500, min: 2000 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <div className="pokemon-carousel-container" style={{ background: darkMode ? '#242424' : '#F4F4F4' }}>
        <h1 style={{ textAlign: 'center', color: darkMode ? '#F4F4F4' : '#242424', paddingBottom: '50px' }}>My Favorite Pokemon</h1>
        <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
        <Carousel
          responsive={responsive}
          infinite
          swipeable
          ssr={false}
        >
          {pokemonNames.map((name, index) => (
            <PokemonCarouselItem key={index} name={name} darkMode={darkMode} />
          ))}
        </Carousel>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <img src="https://fontmeme.com/permalink/240209/e121f8bde9154a24dcb7d418ab4dccee.png" alt="pokemon-font" style={{ maxWidth: '200px' }} />
        </div>

        <PokeAPIImage />
      </div>
    </div>

  );
};

export default PokemonCarousel;
