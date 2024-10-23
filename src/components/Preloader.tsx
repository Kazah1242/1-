import React from 'react';
import '../styles/Preloader.scss';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="loading-text">
        <span>Думаю</span>
        <span className="dot dot1">.</span>
        <span className="dot dot2">.</span>
        <span className="dot dot3">.</span>
      </div>
    </div>
  );
};

export default Preloader;
