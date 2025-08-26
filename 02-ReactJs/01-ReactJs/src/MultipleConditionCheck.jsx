import { useState } from "react";

const MultipleConditionCheck = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <hr />
      <h1>Multiple Condition in ReactJs</h1>
      <h2>Count:{count}</h2>
      {count == 0 ? (
        <h3>Condition 1(count=0)</h3>
      ) : count == 1 ? (
        <h3>Condition 2(count=1)</h3>
      ) : count == 2 ? (
        <h3>Condition 3(count=2)</h3>
      ) : count == 3 ? (
        <h3>Condition 4(count=3)</h3>
      ) : count == 4 ? (
        <h3>Condition 5(count=4)</h3>
      ) : count == 5 ? (
        <h3>Condition 6(count=5)</h3>
      ) : (
        <h3>Condition 6(count greater than 5)</h3>
      )}
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  );
};

export default MultipleConditionCheck;
