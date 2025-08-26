import { Link } from "react-router";
import "./header.css";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="linkLogo">Logo</Link>
      </div>
      <div>
        <ul>
          <li>
            <div>
              <Link to="/">Home</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/about">About</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/college">College</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
