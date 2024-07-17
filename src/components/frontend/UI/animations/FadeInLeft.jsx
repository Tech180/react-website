import { useSpring } from 'react-spring';

const FadeInLeft = (toggle) => {
    return useSpring({
        opacity: toggle ? 1 : 0,
        marginLeft: toggle ? 0 : -500,
        from: { 
            opacity: 0, 
            marginLeft: -500 
        }
    });
};

export default FadeInLeft;
