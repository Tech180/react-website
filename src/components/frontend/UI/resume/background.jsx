import React, { useState } from 'react';
import ScaleText from 'react-scale-text';
import { useSpring, animated } from 'react-spring';
import DarkSwitch from '../toggle/darkswitch';
import Experience from './experience';

const Background = () => {
    const [darkMode] = DarkSwitch();

    const [hovered, setHovered] = useState([false, false, false, false, false]);

    const useIconSpring = (hovered) => {
        return useSpring({ 
            transform: hovered ? 'scale(4)' : 'scale(3.5)', 
            color: 'white'
        });
    };

    const icons = [
        useIconSpring(hovered[0]),
        useIconSpring(hovered[1]),
        useIconSpring(hovered[2]),
        useIconSpring(hovered[3]),
        useIconSpring(hovered[4])
    ];
    
    const iconData = [
        { iconClass: "fab fa-linkedin", url: "https://www.linkedin.com/in/riley-lawson-a7a65b203/" },
        { iconClass: "fab fa-envelope", url: "" },
        { iconClass: "fab fa-github", url: "https://github.com/Tech180" },
        { iconClass: "fab fa-instagram", url: "https://www.instagram.com" },
        { iconClass: "fab fa-facebook", url: "https://www.facebook.com" }
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
                display: flex;
                height: 102vh;
                width: 100vw;
                overflow: hidden;
            }

            .black-section {
                flex: 0 0 30%;
                max-width: 400px;
                height: 100%;
                background-color: black;
                position: relative;
            }

            .white-section {
                flex: 1;
                height: 100%;
                background-color: var(--dark);
                position: relative;
            }

            .grey-bar {
                position: absolute;
                top: 46px;
                left: 0;
                width: 100%;
                height: 140px;
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
                color: #F4F4F4;
                font-family: 'Open Sans', sans-serif;
                top: 170px;
            }

            .icon-resume-container {
                position: absolute;
                align-items: center;
                top: 200px;
                display: flex;
                flex-direction: column;
                gap: 80px;
            }

            .icon-resume {
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

            @media (min-width: 1025px) {
                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                    left: 2%;
                }

                .contact-title {
                    left: 7%;
                }
                
                .icon-resume-container {
                    left: 15%;
                }

                .experience-line {
                    width: 71%;
                }
            }

            @media (max-width: 1024px) {
                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                    left: 28%;
                }

                .contact-title {
                    left: 34%;
                }
                
                .icon-resume-container {
                    left: 44%;
                }

                .experience-line {
                    width: 420px;
                }
            }

            @media (max-width: 900px) {
                .circle {
                    width: 150px;
                    height: 150px;
                    font-size: 50px;
                    line-height: 135px;
                    left: 24%;
                }

                .contact-title {
                    left: 34%;
                }
                
                .icon-resume-container {
                    left: 44%;
                }

                .experience-line {
                    width: 300px;
                }
            }

            @media (max-width: 700px) {
                .circle {
                    width: 125px;
                    height: 125px;
                    font-size: 40px;
                    line-height: 115px;
                    left: 18%;
                }

                .contact-title {
                    left: 22%;
                }

                .icon-resume-container {
                    left: 38%;
                }

                .experience-line {
                    width: 220px;
                }
            }

            @media (max-width: 600px) {
                .circle {
                    width: 100px;
                    height: 100px;
                    font-size: 35px;
                    line-height: 90px;
                    left: 17%;
                }

                .contact-title {
                    left: 14%;
                    top: 125px;
                }

                .icon-resume-container {
                    left: 32%;
                }

                .experience-line {
                    width: 180px;
                }
            }

            @media (max-width: 500px) {
                .circle {
                    width: 100px;
                    height: 100px;
                    font-size: 35px;
                    line-height: 90px;
                    left: 12%;
                }
                
                .contact-title {
                    left: 8%;
                    top: 125px;
                }

                .icon-resume-container {
                    left: 30%;
                }

                .experience-line {
                    width: 120px;
                }
            }

        `}</style>
    );

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
                <Experience/>
            </div>
        </div>
        </>
    );
}

export default Background;
