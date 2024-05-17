import React, { useState, useEffect } from 'react';
import ScaleText from 'react-scale-text';
import { Darklight } from './toggle/darklight';
import { useSpring, animated } from 'react-spring';
import DarkSwitch from './toggle/darkswitch';

function Background() {
    const [darkMode] = DarkSwitch();

    const [hovered, setHovered] = useState([false, false, false, false, false]);

    const icons = [
        useSpring({ 
                transform: hovered[0] ? 'scale(4)' : 'scale(3.5)', 
                color: 'white',
                marginBottom: '60px'
            }
        ),
        useSpring({ 
                transform: hovered[1] ? 'scale(4)' : 'scale(3.5)', 
                color: 'white',
                marginBottom: '60px'
            }
        ),
        useSpring({ 
                transform: hovered[2] ? 'scale(4)' : 'scale(3.5)', 
                color: 'white',
                marginBottom: '60px'
            }
        ),
        useSpring({ 
                transform: hovered[3] ? 'scale(4)' : 'scale(3.5)', 
                color: 'white',
                marginBottom: '60px'
            }
        ),
        useSpring({ 
                transform: hovered[4] ? 'scale(4)' : 'scale(3.5)', 
                color: 'white',
            }
        )
    ];

    const iconData = [
        { iconClass: "fab fa-linkedin", url: "https://www.linkedin.com" },
        { iconClass: "fab fa-linkedin", url: "https://www.twitter.com" },
        { iconClass: "fab fa-linkedin", url: "https://www.github.com" },
        { iconClass: "fab fa-linkedin", url: "https://www.instagram.com" },
        { iconClass: "fab fa-linkedin", url: "https://www.instagram.com" }
    ];

    const styles = (darkMode) => (
        <style jsx>{`
            :root {
                --font-small: 8px;
                --font-average: 12px;
                --font-medium: 15px;
                --font-big: 20px;
                --font-giant: 25px;
                --dark: ${darkMode ? '#F4F4F4' : '#242424'};
                --dark-inverse: ${darkMode ? '#242424' : '#F4F4F4'}
            }

            .container {
                position: relative;
                width: auto;
                height: 101vh;
            }

            .black-section {
                position: absolute;
                width: 30%;
                height: 100%;
                background-color: black;
            }

            .white-section {
                position: absolute;
                left: 30%;
                width: 70%;
                height: 100%;
                background-color: var(--dark);
            }

            .grey-bar {
                position: absolute;
                top: 5%;
                left: 0;
                width: 100%;
                height: 15%;
                background-color: var(--dark-inverse);       
            }

            .grey-bar-text {
                text-align: center;
                color: var(--dark);
                font-family: 'Footlight MT Light', sans-serif;
                font-weight: bold;
                margin-top: 50px;
            }

            .circle {
                position: absolute;
                top: 2%;
                left: 10%;
                border: 5px solid white;
                border-radius: 50%;
                color: #f4f4f4;
                text-align: center;
                line-height: 225px;
            }

            .contact-title {
                position: absolute;
                top: 28%;
                left: 35%;
                color: #F4F4F4;
                font-family: 'Open Sans', sans-serif;
            }

            .icon-resume-container {
                position: absolute;
                align-items: center;
                top: 22%;
                left: 20%;
                display: flex;
                flex-direction: column;
            }

            icon-resume {
                position: absolute;
            }

            @font-face {
                font-family: 'Open Sans';
                src: url('/resume/fonts/OpenSans.ttf');
            }

            @font-face {
                font-family: 'Footlight MT Light';
                src: url('/resume/fonts/FootlightMTLight.ttf');
            }

            @media (min-width: 1400px) {

                .black-section {
                    width: 400px;
                }
    
                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                }

                .contact-title {
                    top: 35%;
                }
            }

            @media (max-width: 1399px) {
                .black-section {
                    width: 400px;
                }
                
                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                }

                .contact-title {
                    top: 35%;
                }
            }

            @media (max-width: 1024px) {

                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                }

                .contact-title {
                    top: 30%;
                }
            }

            @media (max-width: 700px) {

                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                }

                .contact-title {
                    top: 22%;
                }
            }

            @media (max-width: 600px) {

                .circle {
                    width: 100px;
                    height: 100px;
                    font-size: 35px;
                    line-height: 90px;
                    left: 5%;
                }

                .contact-title {
                    top: 15%;
                    left: 8%;
                }

                .icon-resume-container {
                    top: 22%;
                    left: 15%;
                }
            }

            @media (max-width: 500px) {

                .circle {
                    width: 100px;
                    height: 100px;
                    font-size: 35px;
                    line-height: 90px;
                    left: 4%;
                }
                
                .contact-title {
                    top: 15%;
                    left: 2.5%;
                }

                .icon-resume-container {
                    top: 22%;
                    left: 15%;
                }
            }
        `}</style>
    );

    <Darklight darkMode={darkMode} showToggle={false} />


    return (
    <>
        {styles(darkMode)}
        <div className="container">
            <div className="black-section">
                <div className="circle">R | L</div>
                <div className="contact-resume">
                    <ScaleText maxFontSize={10} >
                        <h1 className="contact-title">
                                C O N T A C T
                        </h1>
                    </ScaleText>
                    <div className="icon-resume-container">
                        {icons.map((style, index) => (
                            <animated.div 
                                key={`icon-${index}`} 
                                style={style}
                            >
                                {iconData[index] && (
                                    <a
                                        className="icon-resume"
                                        href={iconData[index].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={() => setHovered(prev => prev.map((item, i) => (i === index ? true : item)))}
                                        onMouseLeave={() => setHovered(prev => prev.map((item, i) => (i === index ? false : item)))}
                                        onPressDown={() => setHovered(prev => prev.map((item, i) => (i === index ? true : item)))}
                                        onPressUp={() => setHovered(prev => prev.map((item, i) => (i === index ? false : item)))}
                                    >
                                        <i className={iconData[index].iconClass} style={{ color: hovered[index] ? '#F4F4F4' : '#F4F4F4' }}></i>
                                    </a>
                                )}
                            </animated.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="white-section">
                <div className="grey-bar">
                    <ScaleText maxFontSize={80} >
                        <div className="grey-bar-text">
                            Riley J. Lawson
                        </div>
                    </ScaleText>
                </div>
            </div>
        </div>
        </>
    );
}

export default Background;
