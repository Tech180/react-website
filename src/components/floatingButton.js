import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./floatingButton.css";

const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstButtonSpring, setFirstButtonSpring] = useSpring(() => ({
    transform: "translate3d(0, 0, 0)",
    config: { mass: 1, tension: 140, friction: 14 },
  }));
  const [secondButtonSpring, setSecondButtonSpring] = useSpring(() => ({
    transform: "translate3d(0, 0, 0)",
    config: { mass: 1, tension: 140, friction: 14 },
  }));
  const [thirdButtonSpring, setThirdButtonSpring] = useSpring(() => ({
    transform: "translate3d(0, 0, 0)",
    config: { mass: 1, tension: 140, friction: 14 },
  }));

  const onClick = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      setFirstButtonSpring({ transform: "translate3d(0, 0, 0)" });
      setSecondButtonSpring({ transform: "translate3d(0, 0, 0)" });
      setThirdButtonSpring({ transform: "translate3d(0, 0, 0)" });
    } 
    else {
      setFirstButtonSpring({ transform: "translate3d(0, -50px, 0)" });
      setSecondButtonSpring({ transform: "translate3d(0, -50px, 0)" });
      setThirdButtonSpring({ transform: "translate3d(0, -50px, 0)" });
    }
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
