import React from 'react';

const Loader = ({ color = 'black' }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="spinner-border"
        style={{
          width: '4rem',
          height: '4rem',
          color,
        }}
      ></div>
    </div>
  );
};

export default Loader;
