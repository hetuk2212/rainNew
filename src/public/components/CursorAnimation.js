import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const CursorAnimation = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Use spring for the elastic effect on the large circle
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Update both the cursorPosition for the small circle and the spring for the large circle
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
      set({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [set]);

  return (
    <div>
      {/* Small Circle (no elastic effect, directly follows cursor) */}
      <div
        style={{
          position: 'fixed',
          top: cursorPosition.y - 10,
          left: cursorPosition.x - 10,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'blue',
          pointerEvents: 'none',
          zIndex: 1000,
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* Large Circle with Elastic Effect */}
      <animated.div
        style={{
          position: 'fixed',
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          border: '1px solid blue',
          pointerEvents: 'none',
          zIndex: 999,
          transform: 'translate(-50%, -50%)',
          top: y.to((y) => `${y - 25}px`),
          left: x.to((x) => `${x - 25}px`),
        }}
      ></animated.div>
    </div>
  );
};

export default CursorAnimation;
