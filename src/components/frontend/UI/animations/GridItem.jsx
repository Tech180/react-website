import { useSpring } from 'react-spring';

const GridItem = (expand, hover, darkMode) => {
    return useSpring({
        width: expand ? '400px' : '100px',
        height: expand ? '400px' : '100px',
        borderRadius: expand ? '20px' : '5px',
        opacity: expand || hover ? 1 : 0.5,
        boxShadow: darkMode ? 
        '0 6px 20px rgba(244, 244, 244, 0.50)': '0 6px 20px rgba(56, 125, 255, 0.50)',
        config: { duration: 200 },
    });
};

export default GridItem;
