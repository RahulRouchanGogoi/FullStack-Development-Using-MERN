import { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const h1Ref=useRef(null);

  const handleInput = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };

  const toggleHandler=()=>
  {
     if(inputRef.current.style.display!="none")
     {
        inputRef.current.style.display="none"
     }else
     {
         inputRef.current.style.display="inline"
     }
  }

  const h1handler=()=>
  {
    h1Ref.current.style.color="green"
  }


  return (
    <div>
      <h1> useRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="Enter user Name" />
      <br />
      <br />
      <button onClick={handleInput}>Focus on Input field</button>
      <br />
      <br />
      <button onClick={toggleHandler}>Toggle</button>

      <h1 ref={h1Ref}>Code with Rahul</h1>
      <button onClick={h1handler}>Handle Button</button>
    </div>
  );
};

export default UseRefHook;
