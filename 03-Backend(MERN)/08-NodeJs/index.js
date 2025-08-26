let express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();

const enquiryRoutes = require("./App/Routes/Web/enquiryRoutes");

//connect to database

let app = express();
app.use(express.json());

app.use("/web/api/enquiry/", enquiryRoutes);

mongoose.connect(process.env.DbUrl).then(() => {
  console.log("connected to database");
  app.listen(process.env.port, () => {
    console.log("Running on port 8000");
  });
});
