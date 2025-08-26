let express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();
let enquiryModel = require("./enquiry.model");

//connect to database

let app = express();
app.use(express.json());

app.post("/api/enquiry-insert", (req, res) => {
  let { sName, sEmail, sPhone, sMessage } = req.body;
  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
  });
  enquiry
    .save()
    .then(() => {
      res.send({
        status: 1,
        message: "Data saved successfully!",
      });
      console.log("Data Saved");
    })
    .catch((err) => {
      res.send({ status: 0, message: "Error while saving!", error: err });
    });
});

app.get("/api/enquiry-view", async (req, res) => {
  let enquiryView = await enquiryModel.find();
  res
    .status(200)
    .json({ status: 1, message: "Enquiry list", data: enquiryView });
});

app.delete("/api/enquiry-delete/:id", async (req, res) => {
  let id = req.params.id;
  let enquiryDelete = await enquiryModel.deleteOne({ _id: id });
  res.send({
    status: 1,
    message: "Data deleted successfully",
    id,
    delResponse: enquiryDelete,
  });
});

app.put("/api/enquiry-update/:id",async(req,res)=>
{
    let id=req.params.id;
    let { sName, sEmail, sPhone, sMessage } = req.body;
    let updateObject={
        name: sName,
    email: sEmail,
    phone: sPhone,
    message: sMessage,
    }

    let updateData=await enquiryModel.updateOne({_id:id},updateObject)
    res.send({status:1,message:"Details updated",updateData})
})

mongoose.connect(process.env.DbUrl).then(() => {
  console.log("connected to database");
  app.listen(process.env.port, () => {
    console.log("Running on port 8000");
  });
});
