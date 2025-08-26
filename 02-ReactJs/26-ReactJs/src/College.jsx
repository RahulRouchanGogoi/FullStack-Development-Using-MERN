import { NavLink, Outlet } from "react-router";
import { Link } from "react-router";

const College = () => {
  return (
    <div className="centerContent">
      <h1>College Page</h1>
      <h4>Nested navigation and Layout index routes</h4>
      <h4><Link to="/">Go back to home</Link></h4>
      <NavLink className="collegeLink" to="">Student</NavLink>
      <NavLink className="collegeLink" to="department">Department</NavLink>
      <NavLink className="collegeLink" to="detail">College Details</NavLink>
      <Outlet/>
    </div>
  );
};
export default College;
