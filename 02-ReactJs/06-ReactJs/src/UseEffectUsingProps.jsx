import { useEffect } from "react";

const UseEffectUsingProps = ({ count }) => {
  const callOnce = () => {
    console.log("Called Once for props");
  };

  useEffect(() => {
    callOnce();
  }, []);

  return (
    <div>
      <h3>Count Props:{count}</h3>
    </div>
  );
};
export default UseEffectUsingProps;
