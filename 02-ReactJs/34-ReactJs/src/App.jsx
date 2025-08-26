import { Routes, Route, NavLink } from "react-router";
import AddUser from "./AddUser";
import "./App.css";
import UserList from "./UserList";

function App() {
  return (
    <>
      <ul>
        <li className="nav-list">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addUser">Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/addUser" element={<AddUser/>} />
      </Routes>
    </>
  );
}

export default App;
