const User=({displayName,name,getUser})=>
{
    
    return(
        <div>
            <h1>Pass function in component as props!</h1>
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>getUser()}>Get User</button>
        </div>
    )
}

export default User;