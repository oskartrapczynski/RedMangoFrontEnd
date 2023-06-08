import React from 'react';

const MiniLoader = ({ color = 'black', size = 100 }) => {
  return (
    <div className="spinner-border" style={{ scale: `${size}%`, color }}></div>
  );
};

export default MiniLoader;
