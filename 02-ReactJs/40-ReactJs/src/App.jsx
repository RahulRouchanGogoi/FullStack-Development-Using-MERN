import { Suspense } from "react";
import "./App.css";
import User from "./User";
const fetchData = () =>
  fetch("https://dummyjson.com/users").then((response) => response.json());
const userResource = fetchData();

function App() {
  return (
    <>
      <div>
        <h1>Use Api in React</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <User userResource={userResource} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
