import "./index.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header-container">
    <h1 className="header-heading">Madelyn Torff</h1>
    <ul className="links-container">
      <li>
        <Link to="/about" className="link-item">
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" className="link-item">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/contacts" className="link-item">
          Contacts
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
