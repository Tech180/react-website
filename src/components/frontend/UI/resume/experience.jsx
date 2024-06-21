import React, { useState } from 'react';
import DarkSwitch from '../toggle/darkswitch';

const Experience = () => {
    const [open, setOpen] = useState(false);
    const [darkMode] = DarkSwitch();


    const toggle = () => {
        setOpen(!open);
    };

    const styles = (darkMode) => (
        <style jsx>{`
            .experience {
                position: relative;
                top: 200px;
                height: 400px;
            }

            .experience-title {
                position: relative;
                color: var(--dark-inverse);
                left: 25px;
                font-family: 'Open Sans', sans-serif;
                font-weight: bold;
                font-size: var(--font-big);
                user-select: none;
                cursor: pointer;
            }

            .experience-title-container {
                display: flex;
                align-items: center;
                position: relative;
                left: 25px;
                top: 10px;
            }

            .experience-title-1,
            .experience-title-1-job,
            .experience-title-2,
            .experience-title-2-job  {
                font-family: 'Open Sans', sans-serif;
                font-size: var(--font-medium);
                font-weight: bolder;
                color: var(--dark-inverse);
            }

            .experience-title-1-job,
            .experience-title-2-job  {
                margin-left: 8px;
                font-weight: 300;
            }

            .experience-1-points-1 ul,
            .experience-2-points-1 {
                margin-top: 15px;
                margin-left: 35px;
                list-style-position: inside;
            }

            .experience-1-points-1 ul li,
            .experience-2-points-1 ul li {
                font-weight: 300;
                font-family: 'Open Sans', sans-serif;
                font-size: var(--font-average);
                color: var(--dark-inverse);
                padding-left: 0;
                margin-left: 0;
            }

            .experience-line {
                height: 1px;
                background-color: var(--dark-inverse);
                margin-top: -12px;
                float: right;
            }

            .experience-years {
                position: relative;
                color: var(--dark-inverse);
                left: 25px;
                top: 10px;
                font-family: 'Open Sans', sans-serif;
                font-size: var(--font-average);
                font-style: italic;
                font-weight: 400;
            }

            .experience-image-1{
                width: auto;
                height: 20px;
                margin-right: 10px;
            }
        `}</style>
    );

    return (
        <>
            {styles(darkMode)}
            <div className="experience">
                <div className="experience-title" onClick={toggle}>
                    E X P E R I E N C E
                </div>
                <div className="experience-line"></div>
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
