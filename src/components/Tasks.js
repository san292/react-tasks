import React from 'react';
import tasks from '../data/data';

const Tasks = () => {
  console.log('tasks', tasks);
  return (
    <div>
      {tasks.map((task) => (
        <h2>{task.text}</h2>
      ))}
    </div>
  );
};

export default Tasks;
