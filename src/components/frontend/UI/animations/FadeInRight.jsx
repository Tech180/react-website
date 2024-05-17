import { useSpring } from 'react-spring';

const FadeInRight = (toggle) => {
    return useSpring({
        opacity: toggle ? 1 : 0,
        marginLeft: toggle ? 0 : 500,
        from: { 
            opacity: 0, 
            marginLeft: 500
        }
    });
};

export default FadeInRight;
