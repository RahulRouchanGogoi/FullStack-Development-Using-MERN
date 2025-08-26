let express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
let app = express();

app.use(express.json());

app.get("/student-read", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");
  let data = await studentCollection.find().toArray();

  let responseObject = {
    status: 1,
    msg: "Student list",
    data,
  };
  res.send(responseObject);
});

app.post("/student-insert", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");
  // let obj={sName:req.body.sName,sEmail:req.body.sEmail}
  // console.log(obj)

  let { sName, sEmail } = req.body;
  let obj = { sName, sEmail };
  console.log(obj);

  let checkEmail = await studentCollection.findOne({ sEmail });
  if (checkEmail == null) {
    let insertRes = await studentCollection.insertOne(obj);
    let responseObject = {
      status: 1,
      msg: "Data inserted",
      insertRes,
    };
    res.send(responseObject);
  }
  if (checkEmail) {
    return res.send({ status: 0, msg: "Email id already exists" });
  }
});

app.delete("/student-delete/:id", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");
  let delResponse = await studentCollection.deleteOne({
    _id: new ObjectId(id),
  });
  let responseObject = {
    status: 1,
    msg: "Data Deleted",
    delResponse,
  };
  res.send(responseObject);
});

app.put("/student-update/:id", async (req, res) => {
  let { id } = req.params; // for using where clause
  let { sName, sEmail } = req.body;

  let obj = {};

  if (sName !== "" && sName !== undefined && sName !== null) {
    obj["sName"] = sName;
  }

  if (sEmail !== "" && sEmail !== undefined && sEmail !== null) {
    obj["sEmail"] = sEmail;
  }

  let myDB = await dbConnection();
  let studentCollection = myDB.collection("students");
  let updateDetails = await studentCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: obj }
  );
  let responseObject = {
    status: 1,
    msg: "Data Updated",
    updateDetails,
  };
  res.send(responseObject);
});

app.listen("8000");
