import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);
  async function getUsersData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();

    setUserData(response.users);
  }

  console.log(userData);

  return (
    <>
      <h1>Fetch data using API</h1>
      {userData &&
        userData.map((user, id) => (
          <ul className="apiData">
            <li key="id">First Name:{user.firstName}</li>
             <li key="id">Last Name:{user.lastName}</li>
             <li key="id">Age:{user.age}</li>
          </ul>
        ))}
    </>
  );
}

export default App;
