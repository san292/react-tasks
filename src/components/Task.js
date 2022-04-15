import React from 'react';

const task = ({ task }) => {
  return (
    <>
      <div className="task">{task.text}</div>
    </>
  );
};

export default task;
