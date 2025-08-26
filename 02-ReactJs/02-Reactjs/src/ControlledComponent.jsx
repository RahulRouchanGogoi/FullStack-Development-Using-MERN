import { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <hr />
      <h1>Controlled Component</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <br></br>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
        <br></br>
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
        <br></br>
        <br></br>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{password}</h3>
      </form>
      <button>Login</button>
      <button
        onClick={() => {
          setName("");
          setEmail("");
          setPassword("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default ControlledComponent;
