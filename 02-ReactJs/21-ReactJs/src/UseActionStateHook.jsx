import { useActionState } from "react";

const UseActionStateHook = () => {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    if (name && password) {
      return { message: "Data Submitted",name,password };
    } else {
      return { error: "Failed to Submit! Enter all the details",name,password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  return (
    <div>
      <h1>UseActionState hook in ReactJs</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="Enter name" name="name" />
        <br />
        <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password" />
        <br />
        <br />
        <button disabled={pending}>
          Submit Details
        </button>
        <br/>
        {
            data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }
        {
            data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }
      </form>
      <h3>Name:{data?.name}</h3>
      <h3>Password:{data?.password}</h3>
    </div>
  );
};
export default UseActionStateHook;
