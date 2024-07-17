import React from 'react';
import { animated } from 'react-spring';
import ChangeWidthOnHover from '../animations/ChangeWidthOnHover';

const PokeAPIImage = ({darkMode}) => {

    const [hover, setHover] = React.useState(false);

    const springProps = ChangeWidthOnHover(hover, '175px', '200px');

    const handleClick = () => {
      window.open("https://github.com/PokeAPI/pokeapi");
    };
  
    return (
        <>
            <div className="pokeImage">
            <animated.img
                src="/images/pokeapi.svg"
                alt="PokeAPI"
                style={{
                ...springProps,
                cursor: 'pointer',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            />
            </div>
            <style jsx>{`
                .pokeImage {
                    display: flex;
                    justify-content: center;
                    padding: 30px;
                    background: ${darkMode ? '#242424' : '#F4F4F4'};
                }
            `}</style>
        </>
    );
};

export default PokeAPIImage;