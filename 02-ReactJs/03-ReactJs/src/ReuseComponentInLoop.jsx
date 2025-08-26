import User from "./User";

const ReuseComponentInLoop=()=>
{

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

    return(
        <div>
            <hr/>
            <h1>Reuse component in Loop</h1>
            {
                userData.map((user)=>
                (
                    <div key={user.id}>
                        <User data={user}/>
                     </div>
                ))
            }
        </div>
    )
}

export default ReuseComponentInLoop;