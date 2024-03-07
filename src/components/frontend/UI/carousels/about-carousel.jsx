import React from 'react';
import Carousels from './carousels';

const aboutCarousel = () => {
    const carouselItems = [
        {
            id: 1,
            imageSrc: '/images/caves.jpg',
            text: "I'm a determined, hardworking, eager-to-learn, and excited-for-the-future individual",
            label: 'Life',
        },
        {
            id: 2,
            imageSrc: '/images/experience.jpg',
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
            text: 'Graduated from Madrid High School, took classes through DMACC, and Graduated at ISU',
            label: 'School',
        },
        {
            id: 5,
            imageSrc: '/images/family.jpg',
            text: 'My parents are Heidi and Brad along with my brother Tate',
            label: 'Family',
        },
    ];

  return (
    <div>
      <Carousels items={carouselItems}/>
    </div>
  );
};

export default aboutCarousel;
