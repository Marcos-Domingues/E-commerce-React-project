// src/components/TransitionOverlay.jsx
import React, { useEffect, useState } from 'react';
import './TransitionOverlay.css'; // Make sure to create this CSS file

const TransitionOverlay = ({ show, onTransitionEnd }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 500); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div
      className={`transition-overlay ${show ? 'visible' : ''}`}
      onAnimationEnd={() => {
        if (!show) {
          onTransitionEnd();
        }
      }}
    />
  );
};

export default TransitionOverlay;