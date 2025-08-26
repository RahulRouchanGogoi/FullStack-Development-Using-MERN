import { use } from "react";

const User = ({ userResource }) => {
  console.log(userResource);
  const userData=use(userResource)
  console.log(userData.users)
  return (
    <div>
      <h1>Users list</h1>
      {
        userData.users?.map((user,id)=>
        (
            <h4 key={id}>User Name:{user.firstName}</h4>
        ))
      }
    </div>
  );
};
export default User;
