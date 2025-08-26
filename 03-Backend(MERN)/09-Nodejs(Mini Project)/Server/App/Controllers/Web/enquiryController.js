const enquiryModel = require("../../Model/enquiry.model");

let enquiryInsert = (req, res) => {
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
};

let enquiryView=async (req, res) => {
  let enquiryView = await enquiryModel.find();
  res
    .status(200)
    .json({ status: 1, message: "Enquiry list", enquiryList: enquiryView });
};

let deleteEnquiry=async (req, res) => {
  let id = req.params.id;
  let enquiryDelete = await enquiryModel.deleteOne({ _id: id });
  res.send({
    status: 1,
    message: "Data deleted successfully",
    id,
    delResponse: enquiryDelete,
  });
}

let fetchSingleRow=async(req,res)=>
{
  let id=req.params.id;
  let getSingleEnquiry=await enquiryModel.findOne({_id:id})
  res.send({
    status:1,
    message:"Single row fetched",
    getSingleEnquiry
  })
}

let enquiryUpdate=async(req,res)=>
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
}




module.exports = { enquiryInsert,enquiryView,enquiryUpdate,deleteEnquiry,fetchSingleRow };
