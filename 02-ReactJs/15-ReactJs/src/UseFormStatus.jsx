import { useFormStatus } from "react-dom";

const UseFromStatus = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submitted")
  };

  function CustomerForm (){
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <button disabled={pending}>{pending?"Submitting...":"Submit"}</button>
      </div>
    );
  };

  return (
    <div>
      <h1>useFormStatus Hook in ReactJs</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
};
export default UseFromStatus;
