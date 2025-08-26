import Student from "./Student";

const College=({college})=>
{
    return(
        <div style={{backgroundColor:"grey",width:"1000px",borderRadius:"10px",marginLeft:"10px",paddingLeft:"10px"}}>
            <h3>Name:{college.name}</h3>
          <ul>
            <li>
              <h3>City:{college.city}</h3>
            </li>
            <li>
              <h3>Website:{college.website}</h3>
            </li>
            <li>
             <Student student={college.student}/>
            </li>
          </ul>
        </div>
    )
}
export default College;