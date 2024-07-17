import React, { useState } from 'react';
import DarkSwitch from '../toggle/darkswitch';
import { animated, useSpring } from 'react-spring';
import './accordion.css'

const Experience = () => {
    const [open, setOpen] = useState(false);
    const [darkMode] = DarkSwitch();


    const toggle = () => {
        setOpen(!open);
    };

    const animationProps = useSpring({
        height: open ? 'auto' : 0,
        overflow: 'hidden'
    });

    return (
        <>
            <div className="experience">
                <div className="experience-title" onClick={toggle}>
                    E X P E R I E N C E
                </div>
                <div className="experience-line"></div>

                <animated.div style={animationProps}>
                    <div className="experience-content">
                        <h3>Company 1</h3>
                        <p>Role: Software Engineer</p>
                        <p>Duration: 2021 - Present</p>
                        <p>Responsibilities: Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div className="experience-content">
                        <h3>Company 2</h3>
                        <p>Role: Front-end Developer</p>
                        <p>Duration: 2019 - 2021</p>
                        <p>Responsibilities: Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div className="experience-content">
                        <h3>Company 2</h3>
                        <p>Role: Front-end Developer</p>
                        <p>Duration: 2019 - 2021</p>
                        <p>Responsibilities: Lorem ipsum dolor sit amet...</p>
                    </div>
                </animated.div>
                {open && (
                    <>
                        <div className="experience-title-container">
                            <img className="experience-image-1" src={`${process.env.PUBLIC_URL}/images/iso-form.png`}/>
                            <div className="experience-title-1">    
                                Software Engineering Intern
                            </div>
                            <div className="experience-title-1-job">
                                | iSO-FORM LLC
                            </div>
                        </div>
                        <div className="experience-years">
                            2022 - 2023
                        </div>
                        <div className="experience-1-points-1">
                            <ul>
                                <li>
                                    Created browser-based applications in both JavaScript and C#
                                </li>
                                <li>
                                    Working with game engines to create UX like experiences utilizing Unity and PlayCanvas                            
                                </li>
                                <li>
                                    Created an automated screenshot controller
                                </li>
                                <li>
                                    Team and client-based collaboration
                                </li>
                            </ul>
                        </div>

                        <div className="experience-title-container">
                        <img className="experience-image-1" src={`${process.env.PUBLIC_URL}/images/${darkMode ? 'lawn-mower-dark' : 'lawn-mower-light'}.png`}/>
                            <div className="experience-title-2">
                                Founder
                            </div>
                            <div className="experience-title-2-job">
                                | Lawson's Mowing Service
                            </div>
                        </div>
                        <div className="experience-years">
                            2012 - 2023
                        </div>
                        <div className="experience-2-points-1">
                            <ul>
                                <li>
                                    High quality mowing services
                                </li>
                                <li>
                                    Operation of and maintenance of lawn equipment                 
                                </li>
                                <li>
                                    Client account management
                                </li>
                                <li>
                                    Delegation and direction to others
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Experience;
