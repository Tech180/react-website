import { useSpring } from 'react-spring';
import Hover from './Hover';


const Slider = (cookies) => {
    return useSpring({
        left: cookies.darkMode === 'true' ? '27px' : '3px',
        backgroundColor: cookies.darkMode === 'true' ? '#4d4d4d' : '#FFCC89',
        config: { 
            tension: 400, 
            friction: 20 
        },
    });
};



export default Slider;
