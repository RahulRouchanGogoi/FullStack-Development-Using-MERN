import { useRef } from "react";

const UnControlledComponentUseRef = () => {
  const userRef = useRef();
  const passRef = useRef();

  const handleFormRef = (event) => {
    event.preventDefault();
    const user=userRef.current.value;
    console.log(user);
    const pass=passRef.current.value;
    console.log(pass);
  };

  return (
    <div>
      <h1>Uncontrolled Component using useRef</h1>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input ref={userRef} type="text" id="userRef" placeholder="Enter user Name"></input>
        <br />
        <input ref={passRef}
          type="password"
          id="passwordRef"
          placeholder="Enter Password"
        ></input>
        <br />
        <button>Submit with Ref</button>
      </form>
    </div>
  );
};

export default UnControlledComponentUseRef;
