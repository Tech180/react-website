import React, { useState } from 'react';
import ScaleText from 'react-scale-text';
import { Darklight } from './toggle/darklight';
import { useSpring, animated } from 'react-spring';
import DarkSwitch from './toggle/darkswitch';

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
        { iconClass: "fab fa-x-twitter", url: "https://x.com/Tech1808" },
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
                height: 100vh;
                width: 100vw;
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
                gap: 80px;
            }

            .icon-resume {
                position: absolute;
            }

            .education {
                position: relative;
                top: 22%;
                height: 400px;
            }

            .education-title {
                position: relative;
                color: var(--dark-inverse);
                left: 4%;
                font-family: 'Open Sans', sans-serif;
                font-weight: bold;
                font-size: var(--font-big);
            }

            .education-line {
                height: 1px;
                background-color: var(--dark-inverse);
                margin-top: -12px;
                float: right;
            }

            .education-years {
                position: relative;
                color: var(--dark-inverse);
                left: 45px;
                top: 30px;
            }

            .education-points {
                position: absolute;
                left: 85px;
                top: 70px;
            }

            .education-point-line {
                width: 1px;
                height: 51px;
                background-color: var(--dark-inverse);
                margin-left: 20px;
                opacity: 75%; 
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
                    top: 22%;
                    left: 7%;
                }
                
                .icon-resume-container {
                    top: 28%;
                    left: 15%;
                }

                .education-line {
                    width: 73%;
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
                    top: 23%;
                    left: 34%;
                }
                
                .icon-resume-container {
                    top: 28%;
                    left: 44%;
                }

                .education-line {
                    width: 70%;
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
                    top: 21%;
                    left: 34%;
                }
                
                .icon-resume-container {
                    top: 26%;
                    left: 44%;
                }

                .education-line {
                    width: 62%;
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
                    top: 18.5%;
                    left: 22%;
                }

                .icon-resume-container {
                    top: 24%;
                    left: 38%;
                }

                .education-line {
                    width: 55%;
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
                    top: 16.5%;
                    left: 14%;
                }

                .icon-resume-container {
                    top: 22%;
                    left: 32%;
                }

                .education-line {
                    width: 50%;
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
                    top: 16.5%;
                    left: 8%;
                }

                .icon-resume-container {
                    top: 22%;
                    left: 30%;
                }

                .education-line {
                    width: 41%;
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
                <div className="education">
                    <div className="education-title">
                        E D U C A T I O N
                    </div>
                    <div className="education-line"></div>
                    <div className="education-years">
                        2023<br/><br/><br/>
                        2021<br/><br/>
                        2019<br/><br/>
                        2019<br/><br/>
                    </div>
                    <div className="education-points">
                        <div className="education-point-line"></div>
                        <div className="education-point-line"></div>
                        <div className="education-point-line"></div>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Background;
