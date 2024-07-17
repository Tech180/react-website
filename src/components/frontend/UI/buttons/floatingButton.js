import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./floatingButton.css";

const springConfig = {
  transform: "translate3d(0, 0, 0)",
  config: { mass: 1, tension: 140, friction: 14 },
};

const expandedSpringConfig = {
  transform: "translate3d(0, -50px, 0)",
  config: { mass: 1, tension: 140, friction: 14 },
};

const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstButtonSpring, setFirstButtonSpring] = useSpring(() => springConfig);
  const [secondButtonSpring, setSecondButtonSpring] = useSpring(() => springConfig);
  const [thirdButtonSpring, setThirdButtonSpring] = useSpring(() => springConfig);

  const setButtonSprings = () => {
    const transform = isExpanded ? springConfig.transform : expandedSpringConfig.transform;
    setFirstButtonSpring({ transform });
    setSecondButtonSpring({ transform });
    setThirdButtonSpring({ transform });
  };

  const onClick = () => {
    setIsExpanded(!isExpanded);
    setButtonSprings();
  };

  return (
    <div className="floating-button-container">
      <div className="floating-button main-button" onClick={onClick}>
        +
      </div>
      {isExpanded && (
        <div className="floating-button-group">
          <animated.div style={firstButtonSpring} className="floating-button">
            1
          </animated.div>
          <animated.div style={secondButtonSpring} className="floating-button">
            2
          </animated.div>
          <animated.div style={thirdButtonSpring} className="floating-button">
            3
          </animated.div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
