import React, { useState } from 'react';

const Hover = (value = false) => {
    const [hovered, setHovered] = useState(value);

    const mouseEnter = () => {
        setHovered(true);
    };

    const mouseLeave = () => {
        setHovered(false);
    };

    return {
        hovered,
        bind: {
            onMouseEnter: mouseEnter,
            onMouseLeave: mouseLeave
        }
    };
};

export default Hover;