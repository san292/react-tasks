import React from 'react';
import { FaTimes } from 'react-icons/fa';

const task = ({ task, deleteTask, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text} <FaTimes onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default task;
