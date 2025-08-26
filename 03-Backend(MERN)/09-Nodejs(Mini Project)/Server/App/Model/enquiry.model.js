let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userEnquirySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

let enquiryModel = mongoose.model("EnquiryTable", userEnquirySchema);
module.exports = enquiryModel;
