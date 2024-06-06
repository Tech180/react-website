import { useSpring } from 'react-spring';

const ChangeWidthOnHover = (hover, min, max) => {
    return useSpring({
        maxWidth: hover ? min : max,
      });
};

export default ChangeWidthOnHover;
