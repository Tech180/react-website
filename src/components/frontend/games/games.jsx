import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useCookies } from 'react-cookie';
import { useSpring, animated } from 'react-spring';
import { Darklight } from '../darklight';
import Popup from '../UI/popup';

const GameItem = ({ item, darkMode, onClick }) => (
  <div className="game-item" onClick={onClick}>
    <img src={item.imageSrc} alt={`Item ${item.id}`} className="game-img" />
    <p className="label">{item.label}</p>
    <p className="text">{item.text}</p>
    {styles(darkMode)}
  </div>
);

const styles = (darkMode) => (
  <style jsx>{`
      .game-item {
        margin-top: 5em;
        margin-bottom: 3em;
        margin-inline: auto;
        margin-left: auto;
        margin-right: auto;
        max-width: auto;
        max-height: auto;
        width: 100%
        height: auto;
        position: relative;
        text-align: center;
        border-radius: 60px;
        background: ${darkMode ? '#242424' : '#F4F4F4'};
        user-select: none;
        -webkit-user-drag: none;
        overflow: hidden;
        box-shadow: ${darkMode ? '0 6px 20px rgba(244, 244, 244, 0.25)' : '0 6px 20px rgba(56, 125, 255, 0.25)'};
        transition: transform 0.3s ease;
      }

      .game-item:hover {
        transform: scale(1.05);
      }

      .game-img {
        max-width: auto;
        width: 100%;
        height: auto; 
        object-fit: cover;
        border-radius: 50px;
        pointer-events: none;
        draggable: false;
        user-select: none;
        -webkit-user-drag: none;
      }

      @media (max-width: 2560px) {
        .game-item {
          max-width: 50%;
        }
      }
      @media (max-width: 1900px) {
        .game-item {
            max-width: 40%;
        }
      }

      @media (max-width: 1700px) {
        .game-item {
            max-width: 40%;
        }
      }

      @media (max-width: 1400px) {
        .game-item {
            max-width: 50%;
        }
      }

      @media (max-width: 1024px) {
        .game-item {
            max-width: 40%;
        }
      }

      @media (max-width: 500px) {
        .game-item {
            max-width: 60%;
        }
      }
  `}</style>
);

const responsive = {
  ultrawide: {
    breakpoint: { 
      max: 5124, min: 2300
    },
    items: 4,
    slidesToSlide: 1,
  },
  biggerdesktop: {
    breakpoint: { 
      max: 2300, min: 1700 
    },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { 
      max: 1700, min: 1024 
    },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { 
      max: 1024, min: 0
    },
    items: 1,
    slidesToSlide: 1,
  },
};

const IGDBImage = ({darkMode}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const springProps = useSpring({
    maxWidth: isHovered ? '175px' : '200px',
  });

  const handleClick = () => {
    window.open("https://api-docs.igdb.com/#getting-started");
  };

  return (
      <>
          <div className="pokeImage">
          <animated.img
              src="/images/IGDB.svg"
              alt="IGDB"
              style={{
              ...springProps,
              cursor: 'pointer',
              filter: darkMode ? 'invert(1) brightness(95%)' : 'none',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleClick}
          />
          </div>
          <style jsx>{`
              .pokeImage {
                  display: flex;
                  justify-content: center;
                  padding: 30px;
                  background: ${darkMode ? '#242424' : '#F4F4F4'};
              }

          `}</style>
      </>
  );
};

const Games = ({ items }) => {
  const [cookies, setCookie] = useCookies(['darkMode']);
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [selectedSummary, setSelectedSummary] = useState('');

  const disableArrow = () => null;

  useEffect(() => {
    const savedDarkMode = cookies.darkMode === 'true';
    setDarkMode(savedDarkMode);
  }, [cookies.darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setCookie('darkMode', newMode.toString(), { path: '/' });
  };

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />

  return (
    <div className="carousel-container" style={{ background: darkMode ? '#242424' : '#F4F4F4' }}>

      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={.02}
        infinite
        swipeable
        ssr={false}
        keyBoardControl
        customTransition="all 1s linear"
        transitionDuration={2000}

        customLeftArrow={<disableArrow/>}
        customRightArrow={<disableArrow/>}
        pauseAutoPlayOnHover={!paused}
      >
        {items.map(item => (
          <GameItem key={item.id} item={item} darkMode={darkMode} 
            onClick={(e) => {
              e.stopPropagation();
              setShowPopup(true);
              setPaused(true);
              setSelectedName(item.label);
              setSelectedSummary(item.summary)
            }}
          />
        ))}
      </Carousel>

      <div className="image-container">
          <h1>Demonstrating</h1>
      </div>

      <IGDBImage darkMode={darkMode}/>

      <Popup
        isOpen={showPopup}
        onClose={() => {setShowPopup(false); setPaused(false);}}
        name={selectedName}
        description={selectedSummary}
      />

      <style jsx>{`
        .image-container {
            display: flex;
            justify-content: center;
            font-size: 20px;
            color: ${darkMode ? '#F4F4F4' : '#242424'};
        }
      `}</style>
    </div>
  );
};

export default Games;
