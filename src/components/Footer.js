import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy</p>
      {location.pathname === '/' && <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
