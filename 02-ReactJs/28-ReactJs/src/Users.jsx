import { Link } from "react-router";
const Users=()=>
{
    const userData=[
        {id:1,Name:"Rahul Rouchan Gogoi"},
        {id:2,Name:"Disha Kalita"},
        {id:3,Name:"Abinash Sagar Bora"},
        {id:4,Name:"Jubismita Bora"},
        {id:5,Name:"Himan Jyoti Bora"},
        {id:6,Name:"Violet Bora"}
    ]
    return(
        <div className="centerContent">
            <h1>Users Page</h1>
            {
                userData.map((items,index)=>(
                    <div>
                    <h4 key={index}><Link to={"/users/"+items.id}>{items.Name}</Link></h4>
                    </div>
                ))
            }

             <h1>Users Page with name in url</h1>
            {
                userData.map((items,index)=>(
                    <div>
                    <h4 key={index}><Link to={"/users/"+items.id+"/"+items.Name}>{items.Name}</Link></h4>
                    </div>
                ))
            }
        </div>
    )
}
export default Users;