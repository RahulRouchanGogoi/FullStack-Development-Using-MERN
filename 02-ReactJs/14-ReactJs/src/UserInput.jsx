// import { forwardRef } from "react";
// const UserInput=(props,ref)=>
// {
//     return(
//         <div>
//             <h1>
//                 Forward Ref
//             </h1>
//             <input ref={ref} type="text" placeholder="Enter details"/>

//         </div>
//     )
// }
// export default forwardRef(UserInput);(user before React 19)

const UserInput=(props)=>
{
    return(
        <div>
            <h1>
                Forward Ref
            </h1>
            <input ref={props.ref} type="text" placeholder="Enter details"/>

        </div>
    )
}
export default UserInput;