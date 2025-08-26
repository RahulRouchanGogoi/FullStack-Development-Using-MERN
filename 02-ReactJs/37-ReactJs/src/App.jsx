import { useActionState, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;
    if (name.length > 5) {
      return { error: "Name cannot be more than 5 characters!",name,password };
    } else if (!regex.test(password)) {
      return { error: "Password cannot contain special characters!" ,name,password};
    } else {
      return { message: "Login suceessful",name,password };
    }
  };
  const [data, action, pending] = useActionState(handleLogin);
  console.log(data);

  return (
    <>
      <h1>Validation with useActionState in React</h1>
      {data?.message && <span>{data?.message}</span>}
      {data?.error && <span>{data?.error}</span>}
      <form action={action}>
        <input defaultValue={data?.name} type="text" name="name" placeholder="Enter user name" />
        <br />
        <input defaultValue={data?.password} type="text" name="password" placeholder="Enter password" />
        <br />
        <button >Login</button>
      </form>
    </>
  );
}

export default App;
