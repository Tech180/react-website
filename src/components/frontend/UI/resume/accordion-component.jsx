import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import './accordion.css'

const AccordionComponent = ( {data} ) => {

    const [open, setOpen] = useState(false);

    const educationData = {
        title: 'E D U C A T I O N',
        logo: ``,
        company: 'iso-form',
        jobTitle: 'Software Engineering Intern',
        description: `
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
        `,
    };

    const { title, logo, company, jobTitle, description } = data;

    return (
        <>

                <div className="accordion">
                    <div className="accordion-item">
                        <div className="accordion-title"
                             onClick={() => 
                                setOpen(!open)
                             }
                        >
                            <div dangerouslySetInnerHTML={{ __html: title }} />
                        </div>
                        {open && 
                            <div className="accordion-content">
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        }
                    </div>
                </div>

        </>
    );
};

export default AccordionComponent;
