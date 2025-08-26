const Props=({name="User Name",age,user})=>/*Default Props*/
{
    return(
        <div>
            <hr/>
            <h1>Props</h1>
            <h3>Name(Using props):{name}</h3>
            <h3>Age:{age}</h3>

            <h2>Passed using object</h2>
            <h3>Name:{user.name}</h3>
            <h3>Age:{user.age}</h3>
            <h3>Email:{user.email}</h3>
        </div>
    )
}

export default Props;