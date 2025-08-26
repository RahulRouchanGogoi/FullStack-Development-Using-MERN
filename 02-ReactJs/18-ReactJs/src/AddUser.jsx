
const AddUser = ({setUser}) => {
 
  
  return (
    <div>
      <h2>Add User(Component 1)</h2>
      <input
        onChange={(event) => setUser(event.target.value)}
        type="text"
        placeholder="Enter user"
      />

      <hr />
    </div>
  );
};

export default AddUser;
