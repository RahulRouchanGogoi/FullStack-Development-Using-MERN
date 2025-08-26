import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditUser = () => {
  const { id } = useParams();
  console.log(id);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const url = "http://localhost:3000/users/" + id;
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    console.log(id);

    console.log(url);
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name);
    setAge(response.age);
    setEmail(response.email);
  };

  const updateUserData = async () => {
    console.log(name, age, email);
    let response = await fetch(url, {
      method: "put",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert("User Data updated successfully");
    }
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Edit user page</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Edit user name"
      />
      <br />
      <input
        type="text"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Edit user age"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Edit user email"
      />
      <br />
      <button onClick={updateUserData}>Update User Details</button>
    </div>
  );
};
export default EditUser;
