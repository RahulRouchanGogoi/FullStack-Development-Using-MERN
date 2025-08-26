import { NavLink, Outlet } from "react-router";

const College = () => {
  return (
    <div className="centerContent">
      <h1>College Page</h1>
      <h4>Nested navigation</h4>
      <NavLink className="collegeLink" to="student">Student</NavLink>
      <NavLink className="collegeLink" to="department">Department</NavLink>
      <NavLink className="collegeLink" to="detail">College Details</NavLink>
      <Outlet/>
    </div>
  );
};
export default College;
