import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Rahul Rouchan Gogoi");
  const [data, setData] = useState({
    name: "Rahul",
    address: {
      city: "Nagaon",
      country: "India",
    },
  });

  const changeName = (name) => {
    data.name = name;

    setData({ ...data });
  };

  const changeCity = (city) => {
    data.address.city = city;

    setData({ ...data, address: { ...data.address, city } });
  };

  const changeCountry = (country) => {
    data.address.country = country;

    setData({ ...data, address: { ...data.address, country } });
  };

  return (
    <>
      <h1>Updating objects in React</h1>
      <h2>{name}</h2>
      <button onClick={() => setName("Disha Kalita")}>Update Name</button>
      <hr />
      <h3>Name:{data.name}</h3>
      <h3>City:{data.address.city}</h3>
      <h3>Country:{data.address.country}</h3>
      <input
        onChange={(event) => {
          changeName(event.target.value);
        }}
        type="text"
        placeholder="Change name"
      />

      <input
        onChange={(event) => {
          changeCity(event.target.value);
        }}
        type="text"
        placeholder="Change City"
      />
      <input
        onChange={(event) => {
          changeCountry(event.target.value);
        }}
        type="text"
        placeholder="Change Country"
      />
    </>
  );
}

export default App;
