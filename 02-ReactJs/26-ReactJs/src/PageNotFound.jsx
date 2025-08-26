import pagenotfound from "./assets/404image.jpg";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor:"white"
        }}
      >
        <h1 style={{padding:"0px",margin:"0px",color:"red"}}>Page not found</h1>
        <h2 style={{padding:"0px",margin:"0px",color:"red"}} >404 Error</h2>
        <Link style={{padding:"0px",margin:"0px",color:"black"}} to="/">Go to Home</Link>
      </div>
      <div>
        <img style={{height:"100%",width:"100%"}} src={pagenotfound} />
      </div>
    </div>
  );
};
export default PageNotFound;
