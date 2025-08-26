let express = require("express");
let mongoose = require("mongoose");
var cors = require('cors')
const enquiryRoutes = require("./App/Routes/Web/enquiryRoutes");
require("dotenv").config();
let app = express();

app.use(cors())
app.use(express.json())

//Routes
app.use("/api/website/enquiry",enquiryRoutes)


mongoose
  .connect(process.env.databaseURL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT || 3000, () => {
      console.log("Running at port 8000 or 3000(if 8000 is not available)!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
