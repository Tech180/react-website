import { useSpring } from 'react-spring';


//Outline of the Textbox
const Input = (hover, darkMode) => {
    return useSpring({
        backgroundColor: hover ? (darkMode ? 'rgba(255,255,255,0.45)' : 'rgba(36,36,36,0.6)') : (darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(36,36,36,0.4)'),
        boxShadow: hover ? '0px 4px 20px 0px rgba(0, 0, 0, 0.05)' : '0px 0px 0px 0px rgba(0, 0, 0, 0)',
        config: { 
            tension: 500, 
            friction: 30, 
            precision: 0.1 
        }
    });
};

export default Input;
