const Student=({student})=>
{
    return(
        <div>
             <h3>Students</h3>
              {
                
                  student.map((student)=>(
                  <div><ul><li>Name:{student.name}</li></ul></div>

                ))
              }
        </div>
    )
}
export default Student;
