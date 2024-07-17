import React, { useState, useEffect } from 'react';
import { animated } from 'react-spring';
import { useCookies } from 'react-cookie';
import Input from './animations/Input';

const TextBox = ({ text, value, name, onChange, rows, textType }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [, setInputValue] = useState(text || '');
    const [error, setError] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [focused, setFocused] = useState(false);
    const [cookies, ] = useCookies(['darkMode']);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = cookies.darkMode === 'true';
        setDarkMode(savedDarkMode);
    }, [cookies.darkMode]);

    /* Outline */
    const animation = Input(isHovered, darkMode);

    const validEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        const value = e.target.value;

        setInputValue(value);

        if (text === "Email Address" && validEmail(value)) {
            setCorrect(true);
        }

        if (text === "Email Address" && !validEmail(value)) {   

            setCorrect(false);

            if(focused && !value) {
                setError(false);
            }
            else {
                setError(true);
            }
        }


        //console.log(error);
    };

    const styles = (darkMode) => (
        <style jsx>{`
            .field {
                width: 400px;
                height: 56px;
                border-radius: 4px;
                position: relative;
            }

            .error {
                border: 1px solid red;
            }

            .correct {
                border: 1px solid green;
            }

            textarea {
                width: calc(100% - 20px);
                border: none;
                outline: none;
                padding-top: 18px;
                padding-left: 10px;
                font-size: 16px;
                background: none;
                color: ${darkMode ? '#F4F4F4' : '#242424'};
                position: absolute;
                z-index: 1;
                resize: none; 
                overflow-y: hidden;
            }

            textarea:focus + label,
            textarea:not(:placeholder-shown) + label {
                transform: translateY(-35px);
                font-size: 14px;
                color: ${darkMode ? '#B39DDB' : '#9AC2E6'};
                opacity: revert;
            }
            
            label {
                position: absolute;
                top: 25%;
                left: 10px;
                font-size: 16px;
                color: ${darkMode ? '#F4F4F4' : '#242424'};
                transition: transform 0.3s ease, font-size 0.3s ease, color 0.3s ease;
                opacity: 75%;
                user-select: none;
            }

            @media screen and (max-width: 500px) {
                .field {
                    width: 300px;
                }
            }
        `}</style>
    );

    return (
        <>
           {styles(darkMode)}

            <animated.div
                className="field"
                style={{ ...animation, height: `${rows * 28}px` }}
                onChange={handleChange}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`field ${error ? 'error' : ''} ${correct ? 'correct' : ''}`} >
                    <textarea
                        value={value}
                        onChange={onChange}
                        placeholder=""
                        type={textType}
                        name={name}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        rows={rows}
                        required
                    />
                    <label className="input">
                        {text}
                    </label>
                </div>
            </animated.div>
        </>
    );
};

export default TextBox;
