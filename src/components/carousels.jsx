import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

const CarouselItem = ({ item, darkMode }) => (
  <div className="carousel-item">
    <img src={item.imageSrc} alt={`Item ${item.id}`} className="carousel-img" />
    <p className="label">{item.label}</p>
    <p>{item.text}</p>
    <style jsx>{`
      .carousel-item {
        margin-top: 1em;
        margin-bottom: 1em;
        margin-inline: 10%;
        max-width: 80%;
        max-height: 90%;
        height: 100%;
        position: relative;
        text-align: center;
        padding: 50px;
        border: 1px ${darkMode ? '#242424' : '#F4F4F4'};;
        border-style: dashed solid;
        border-radius: 50px;
        background: ${darkMode ? '#F4F4F4' : '#242424'};
        user-select: none;
        -webkit-user-drag: none;
      }

      .carousel-img {
        max-width: 100%;
        height: 85%; 
        object-fit: cover;
        border-radius: 50px;
        background: ${darkMode ? '#242424' : '#242424'};
        pointer-events: none;
        draggable: false;
        user-select: none;
        -webkit-user-drag: none;
      }

      .label {
        position: absolute;
        bottom: 15%;
        left: 10px;
        background: ${darkMode ? 'rgba(36, 36, 36, 0.5)' : 'rgba(244, 244, 244, 0.5)'};
        padding: 5px 10px;
        border-radius: 8px;
        color: ${darkMode ? '#242424' : '#242424'};
      }

      .carousel-item p {
        margin: 20px 0;
        color: ${darkMode ? '#242424' : '#F4F4F4'};
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

const Carousels = () => {
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

  const carouselItems = [
    {
      id: 1,
      imageSrc: '/images/img-home.jpg',
      text: "I'm a determined, hardworking, eager-to-learn, and excited-for-the-future individual",
      label: 'Life',
    },
    {
      id: 2,
      imageSrc: '/images/img-home.jpg',
      text: 'Founder of Lawson Mowing Service and previous Software Engineer Intern @ iS0-FORM',
      label: 'Experience',
    },
    {
      id: 3,
      imageSrc: '/images/waterfall.jpeg',
      text: 'Android Enthusiast/Custom ROM Developer, Competitive Pokemon Enthusiast, Video Games, Running/Weight Lifting, Coding and Developing Software',
      label: 'Hobbies',
    },
    {
      id: 4,
      imageSrc: '/images/graduation.jpg',
      text: 'Graduated from Madrid High School, took classes through DMACC, and am a 5th-year student at Iowa State University',
      label: 'School',
    },
    {
      id: 5,
      imageSrc: '/images/family.jpg',
      text: 'My parents are Heidi and Brad along with my brother Tate',
      label: 'Family',
    },
  ];

  const responsive = {
    ultrawide: {
      breakpoint: { 
        max: 5124, min: 2000 
      },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { 
        max: 2000, min: 1024 
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

  return (
    <div className="carousel-container" style={{ background: darkMode ? '#242424' : '#F4F4F4' }}>
      <Darklight darkMode={darkMode} toggleDarkMode={toggleDarkMode} showToggle={false} />
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={5000}
        infinite
        swipeable
        ssr={false}
      >
        {carouselItems.map(item => (
          <CarouselItem key={item.id} item={item} darkMode={darkMode} />
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
