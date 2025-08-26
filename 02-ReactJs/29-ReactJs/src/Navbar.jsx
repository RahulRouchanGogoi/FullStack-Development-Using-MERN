import { Link, NavLink, Outlet } from "react-router";
import "./header.css";
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <NavLink to="/" className="linkLogo">
            Logo
          </NavLink>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <NavLink to="/">Home</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/about">About</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/college">College</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/users">Users</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="/users/lists">Lists</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Navbar;
