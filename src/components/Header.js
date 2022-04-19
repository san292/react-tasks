import React from 'react';
import Button from './Button';

const Header = ({ onShowAdd, showAddTask }) => {
  return (
    <div className="header">
      <h1>react-tasks</h1>
      <Button
        color={showAddTask ? 'red' : 'green'}
        title={showAddTask ? 'Close' : 'Add'}
        onShowAdd={onShowAdd}
      />
    </div>
  );
};

export default Header;
