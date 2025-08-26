import { useEffect, useState } from "react";

const Clock = ({ colour }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: true }));
    }, 1000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Digital Clock Using React</h1>
      <h2
        style={{
          border: "1px solid grey",
          width: "150px",
          borderRadius: "10px",
          color:colour
        }}
      >
        {time}
      </h2>
    </div>
  );
};
export default Clock;
