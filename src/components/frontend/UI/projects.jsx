import React, { useEffect, useState } from 'react';
import { animated } from 'react-spring';
import FadeInRight from './animations/FadeInRight';
//import FadeInLeft from './animations/FadeInLeft';

const Projects = () => {
    const [toggle, setToggle] = useState(false);
    const y = 1400;

    useEffect(() => {
        const handleScroll = (y) => {
            // Detect if user has scrolled enough to trigger animation
            if (window.scrollY > y) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        };

        const onScroll = () => handleScroll(1400);

        // Add scroll event listener
        window.addEventListener('scroll', onScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [y]);

    const animation = FadeInRight(toggle);

    return ( 
        <animated.div style={animation}>     
            Hello Sanfransico Hot Dogs!!!
        </animated.div>
    );
};

export default Projects;
