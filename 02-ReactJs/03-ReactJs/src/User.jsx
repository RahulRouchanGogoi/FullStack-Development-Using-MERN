const User=({data})=>
{
    return(
        <div style={{border:"1px solid green",color:"green",marginTop:"5px",borderRadius:"10px"}}>
            <h3>Name:{data.name}</h3>
            <h3>Age:{data.age}</h3>
            <h3>Email:{data.email}</h3>
           
        </div>
    )
}

export default User;