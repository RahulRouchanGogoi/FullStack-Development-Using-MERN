const LoopInJsx = () => {
  const userData = [
    /*Array of objects*/
    {
      name: "Rahul",
      age: 24,
      email: "rahulrouchangogoi@gmail.com",
      id: 1,
    },
    {
      name: "Disha",
      age: 24,
      email: "dishakalita@gmail.com",
      id: 2,
    },
    {
      name: "Ram",
      age: 25,
      email: "ram@gmail.com",
      id: 3,
    },
    {
      name: "Laxman",
      age: 27,
      email: "laxman@gmail.com",
      id: 4,
    },
    {
      name: "Raj",
      age: 20,
      email: "raj@gmail.com",
      id: 5,
    },
  ];

  return (
    <div>
      <h1>Loop in JSX with MAP function</h1>
      <table border={"1"}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoopInJsx;
