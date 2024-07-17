import React, { useState } from 'react';
import DarkSwitch from '../toggle/darkswitch';
import { animated, useSpring } from 'react-spring';
import './accordion.css'

const Education = () => {
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
            <div className="education">
                <div className="education-title" onClick={toggle}>
                    E X P E R I E N C E
                </div>
                <div className="education-line"></div>
                <animated.div style={animationProps}>
                    <div className="education-content">
                        <h3>University 1</h3>
                        <p>Degree: Bachelor's in Computer Science</p>
                        <p>Duration: 2015 - 2019</p>
                    </div>
                    <div className="education-content">
                        <h3>University 2</h3>
                        <p>Degree: Master's in Software Engineering</p>
                        <p>Duration: 2019 - 2021</p>
                    </div>
                    <div className="education-content">
                        <h3>University 2</h3>
                        <p>Degree: Master's in Software Engineering</p>
                        <p>Duration: 2019 - 2021</p>
                    </div>
                </animated.div>
                {open && (
                    <>
                        <div className="education-title-container">
                            <img className="education-image-1" src={`${process.env.PUBLIC_URL}/images/iso-form.png`}/>
                            <div className="education-title-1">    
                                Software Engineering Intern
                            </div>
                            <div className="education-title-1-job">
                                | iSO-FORM LLC
                            </div>
                        </div>
                        <div className="education-years">
                            2022 - 2023
                        </div>
                        <div className="education-1-points-1">
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

                        <div className="education-title-container">
                        <img className="education-image-1" src={`${process.env.PUBLIC_URL}/images/${darkMode ? 'lawn-mower-dark' : 'lawn-mower-light'}.png`}/>
                            <div className="education-title-2">
                                Founder
                            </div>
                            <div className="education-title-2-job">
                                | Lawson's Mowing Service
                            </div>
                        </div>
                        <div className="education-years">
                            2012 - 2023
                        </div>
                        <div className="education-2-points-1">
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

export default Education;
