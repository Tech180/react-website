import { useSpring } from 'react-spring';

const ItemBoxSpring = (hover) => {
    return useSpring({
        transform: hover ? 'scale(1.2)' : 'scale(1)',
        opacity: hover ? 1 : 0.5,
    });
};

export default ItemBoxSpring;
