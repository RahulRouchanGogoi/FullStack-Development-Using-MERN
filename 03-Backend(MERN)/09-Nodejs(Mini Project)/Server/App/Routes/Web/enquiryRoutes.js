let express = require("express");
const {
  enquiryInsert,
  enquiryView,
  deleteEnquiry,
  enquiryUpdate,
  fetchSingleRow,
} = require("../../Controllers/Web/enquiryController");
let enquiryRoutes = express.Router();

enquiryRoutes.post("/insert", enquiryInsert);

enquiryRoutes.get("/view", enquiryView);

enquiryRoutes.delete("/delete/:id", deleteEnquiry);

enquiryRoutes.get("/updateSingleRow/:id", fetchSingleRow);

enquiryRoutes.put("/update/:id", enquiryUpdate);

module.exports = enquiryRoutes;
