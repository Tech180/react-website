import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Darklight } from './darklight';
import { useCookies } from 'react-cookie';

const CarouselItem = ({ item, darkMode }) => (
  <div className="carousel-item">
    <img src={item.imageSrc} alt={`Item ${item.id}`} className="carousel-img" />
    <div className="label">
      <p>{item.label}</p>
    </div>
    <div className="text-container">
      <p>{item.text}</p>
    </div>
    {styles(darkMode)}
  </div>
);

const styles = (darkMode) => (
  <style jsx>{`
    .carousel-item {
      margin-top: 1em;
      width: 100%;
      padding-top: 100%;
      position: relative;
      text-align: center;
      border: 1px ${darkMode ? '#242424' : '#F4F4F4'};
      border-radius: 50px;
      background: ${darkMode ? '#F4F4F4' : '#242424'};
      margin-left: auto;
      margin-right: auto;
      user-select: none;
      -webkit-user-drag: none;
      overflow: hidden;
    }

    .carousel-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      draggable: false;
      user-select: none;
      -webkit-user-drag: none;
    }

    .text-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 15%;
      background: rgba(0, 0, 0, 0.7);
      box-sizing: border-box;
      color: #fff;
      transform: translateY(100%);
      transition: transform 0.3s ease;
      font-size: 1.2em;
    }

    .carousel-item:hover .text-container {
      transform: translateY(0);
    }

    .label {
      position: absolute;
      bottom: 20%;
      right: 80%;
      width: 100px;
      height: 25px;
      color: #fff;
      font-size: 1.2em;
      margin: 0;
      font-weight: bold;
      font-size: 100%;
      z-index: 1;
      content: attr(data-category);
      position: absolute;
      background-color: #9AC2E6;
      border-radius:25px;
    }
    


    .carousel-item p {
      margin: 0;
    }

    @media (min-width: 2000px) {
      .carousel-item {
        max-width: 100%;
        max-height: 80%;
        #padding-top: 100%;
      }
    }

    @media (max-width: 1024px) {
      .carousel-item {
        max-width: 80%;
        max-height: 80%;
        #padding-top: 80%;
      }
    }

    @media (max-width: 300px) {
      .carousel-item {
        max-width: 80%;
        max-height: 80%;
        #padding-top: 80%;
      }
    }
  `}</style>
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
        rtl

        //customLeftArrow={<Left/>}
        //customRightArrow={<Right />}
        
      >
        {carouselItems.map(item => (
          <CarouselItem key={item.id} item={item} darkMode={darkMode} />
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
