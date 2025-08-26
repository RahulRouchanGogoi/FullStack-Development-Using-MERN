const UnControlledComponent=()=>
{

    const handleForm=(event)=>
    {
        
        event.preventDefault();
        const user=document.querySelector("#user").value;
        console.log(user);
        const password=document.querySelector("#password").value;
        console.log(password);
    }

    return (
        <div>
            <h1>Uncontrolled Component in ReactJs with Query Selector</h1>
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="Enter user Name"></input>
                <br/>
                <input type="password" id="password" placeholder="Enter Password"></input>
                <br/>
                <button>Submit</button>
            </form>
            <hr/>
        </div>
    )
}

export default UnControlledComponent