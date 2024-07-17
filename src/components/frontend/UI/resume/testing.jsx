import React, { useState } from 'react';
import DarkSwitch from '../toggle/darkswitch';
import { animated, useSpring } from 'react-spring';
import './accordion.css'
import AccordionComponent from './accordion-component';


//https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
//https://mui.com/material-ui/react-accordion/
//https://codesandbox.io/s/dynamic-accordion-in-react-js-array-data-2qym2?file=/src/Section.js

const Testing = () => {
    const experienceData = {
        title: `
            <div class="experience-title">
                E X P E R I E N C E
            </div>
        `,
        logo: `${process.env.PUBLIC_URL}/images/iso-form.png`,
        company: 'iso-form',
        jobTitle: 'Software Engineering Intern',
        description: `
            <div class="experience-1-points-1">
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
        `,
    };

    return (
        <>
            <AccordionComponent data={experienceData}/>
        </>
    );
};

export default Testing;
