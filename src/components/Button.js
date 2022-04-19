import React from 'react';

const Button = ({ color, onShowAdd }) => {
  return (
    <button className="btn" style={{ background: color }} onClick={onShowAdd}>
      ADD
    </button>
  );
};

export default Button;
