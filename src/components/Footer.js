import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy</p>
      {/* useLocation sert a cacher le lien une fois qu'onest dans le composant about   */}
      {location.pathname === '/' && <Link to="/about">About</Link>}
    </footer>
  );
};

export default Footer;
