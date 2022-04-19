import React from 'react';

const Button = ({ color, title, onShowAdd }) => {
  return (
    <button className="btn" style={{ background: color }} onClick={onShowAdd}>
      {title}
    </button>
  );
};

export default Button;
