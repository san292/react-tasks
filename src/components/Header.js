import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ onShowAdd, showAddTask }) => {
  const location = useLocation();
  return (
    <div className="header">
      <h1>react-tasks</h1>
      {location.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          title={showAddTask ? 'Close' : 'Add'}
          onShowAdd={onShowAdd}
        />
      )}
    </div>
  );
};

export default Header;
