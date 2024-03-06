import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';
import AboutCarousel from './about-carousel';


const CarouselItem = ({ item, darkMode }) => (
  <div className="carousel-item">
    <img src={item.imageSrc} alt={`Item ${item.id}`} className="carousel-img" />
    <p className="label">{item.label}</p>
    <p className="text">{item.text}</p>
    {styles(darkMode)}
  </div>
);

  const styles = (darkMode) => (
    <style jsx>{`
        .carousel-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .carousel-container {
          position: relative;
        }

        .carousel-item {
          margin-top: 10em;
          margin-inline: auto;
          margin-left: auto;
          margin-right: auto;
          max-width: auto;
          max-height: auto;
          height: 70%;
          position: relative;
          text-align: center;
          border-radius: 60px;
          background: ${darkMode ? '#242424' : '#F4F4F4'};
          user-select: none;
          -webkit-user-drag: none;
          overflow: hidden;
          box-shadow: ${darkMode ? '0 6px 20px rgba(244, 244, 244, 0.25)' : '0 6px 20px rgba(56, 125, 255, 0.25)'};
        }

        .carousel-img {
          max-width: 100%;
          width: 100%;
          height: 80%; 
          object-fit: cover;
          border-radius: 50px;
          pointer-events: none;
          draggable: false;
          user-select: none;
          -webkit-user-drag: none;
        }

        .carousel-item:hover .text-container {
          transform: translateY(0);
        }

        .label {
          position: absolute;
          bottom: 25%;
          left: 20px;
          background: ${darkMode ? 'rgba(36, 36, 36, 0.5)' : 'rgba(244, 244, 244, 0.5)'};
          padding: 5px 10px;
          border-radius: 8px;
          color: ${darkMode ? '#F4F4F4' : '#242424'};
        }

        .text {
          position: absolute;
          color: ${darkMode ? '#F4F4F4' : '#242424'};
        }
        
        .carousel-item p {
          margin: 0;
        }

        @keyframes shadowFade {
          0% {
            box-shadow: ${darkMode ? '0 6px 20px rgba(244, 244, 244, 0.25)' : '0 6px 20px rgba(56, 125, 255, 0.25)'};
          }
          100% {
            box-shadow: ${darkMode ? '0 6px 20px rgba(244, 244, 244, 0.5)' : '0 6px 20px rgba(56, 125, 255, 0.5)'};
          }
        }

        @media (max-width: 2560px) {
          .carousel-item {
            max-width: 70%;
            max-height: auto;
            #padding-top: 100%;
          }
        }
        @media (max-width: 1920px) {
          .carousel-item {
            max-width: 70%;
            max-height: auto;
            #padding-top: 100%;
          }
        }

        @media (max-width: 1024px) {
          .carousel-item {
            max-width: 60%;
            max-height: auto;
            #padding-top: 80%;
          }
        }

        @media (max-width: 500px) {
          .carousel-item {
            max-width: 70%;
            max-height: auto;
          }
        }

        @media (max-width: 0px) {
          .carousel-item {
            max-width: 80%;
            max-height: 80%;
            #padding-top: 80%;
          }
        }
    `}</style>
  );

  const responsive = {
    ultrawide: {
      breakpoint: { 
        max: 5124, min: 2560 
      },
      items: 3,
      slidesToSlide: 1,
    },
    biggerdesktop: {
      breakpoint: { 
        max: 2560, min: 1920 
      },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { 
        max: 1920, min: 1024 
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

const Carousels = ({ items }) => {
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

  <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />

  return (
    <div className="carousel-container" style={{ background: darkMode ? '#242424' : '#F4F4F4' }}>

      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={5000}
        infinite
        swipeable
        ssr={false}

        //customLeftArrow={<Left/>}
        //customRightArrow={<Right />}
        
      >
        {items.map(item => (
          <CarouselItem key={item.id} item={item} darkMode={darkMode}/>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
