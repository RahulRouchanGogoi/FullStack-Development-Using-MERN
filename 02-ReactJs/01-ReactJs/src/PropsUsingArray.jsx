const PropsUsingArray=(props)=>
{
    return(
        <div>
            <hr/>
            <h1>Props Using Array</h1>
            <h3>{props.college[0]}</h3>
            <h3>{props.college[1]}</h3>
            <h3>{props.college[2]}</h3>
        </div>
    )
}

export default PropsUsingArray;