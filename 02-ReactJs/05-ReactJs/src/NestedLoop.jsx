import College from "./College";

const NestedLoop = () => {
  const collegeData = [
    {
      name: "JEC",
      city: "Jorhat",
      website: "www.jec.com",
      student: [
        { name: "Rahul", age: "24", email: "rahul@gmail.com" },
        { name: "Disha", age: "24", email: "disha@gmail.com" },
        { name: "Raj", age: "24", email: "raj@gmail.com" },
      ],
    },
    {
      name: "Concept",
      city: "Nagaon",
      website: "www.concept.com",
      student: [
        { name: "Shiru", age: "24", email: "shiru@gmail.com" },
        { name: "Abinash", age: "24", email: "abinash@gmail.com" },
        { name: "Partha", age: "24", email: "partha@gmail.com" },
      ],
    },
    {
      name: "AEC",
      city: "Guwahati",
      website: "www.aec.com",
      student: [
        { name: "Ankita", age: "24", email: "ankita@gmail.com" },
        { name: "Kunal", age: "24", email: "kunal@gmail.com" },
        { name: "Tinku", age: "25", email: "tinku@gmail.com" },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Loop with component</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college}/>
        </div>
      ))}
    </div>
  );
};

export default NestedLoop;
