import { Link, useParams } from "react-router";

const UserDetail = () => {
  const paramsData = useParams();
  console.log(paramsData);
  return (
    <div>
      <h1>User Details Page</h1>
      <h2>User id:{paramsData.id}</h2>

      <h3>
        <Link to="/users">Back</Link>
      </h3>
    </div>
  );
};
export default UserDetail;
