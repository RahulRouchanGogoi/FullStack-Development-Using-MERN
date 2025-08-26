let express = require("express");
const { enquiryInsert, enquiryView, deleteEnquiry, enquiryUpdate } = require("../../Controllers/Web/userEnquiryController");
let enquiryRoutes=express.Router();

enquiryRoutes.post("/enquiry-insert",enquiryInsert)

enquiryRoutes.get("/enquiry-view", enquiryView)

enquiryRoutes.delete("/enquiry-delete/:id", deleteEnquiry);

enquiryRoutes.put("/enquiry-update/:id",enquiryUpdate)

module.exports=enquiryRoutes;
