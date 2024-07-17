import { useSpring } from 'react-spring';

const Spring = () => {
    return useSpring({
        config: { 
            tension: 400, 
            friction: 20 
        },
    });
};

export default Spring;
