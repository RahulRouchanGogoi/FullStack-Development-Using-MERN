let express = require("express");

let app = express();
app.use(express.json()); //this is also a built-in middleware

let myToken = "12345";
let myPass="rahul123"

let checkToken = (req, res, next) => {
  console.log(req.query.token);

  if (req.query.token == "" || req.query.token==undefined) {
    return res.send({ status: 0, msg: "please fill the token" });
  }
  if (req.query.token != myToken) {
    return res.send({ status: 0, msg: "please fill the correct token" });
  }
  console.log("Welcome!");
  next();
};
app.use(checkToken); //middleware

app.use((req,res,next)=> //middleware2
{
  if (req.query.pass == "" || req.query.pass==undefined) {
    return res.send({ status: 0, msg: "please fill the Password" });
  }
  if (req.query.pass != myPass) {
    return res.send({ status: 0, msg: "please fill the correct Password" });
  }
  console.log("Welcome correct password!");
  next();
})



app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home page api" });
});

app.get("/news", (req, res) => {
  res.send({ status: 2, msg: "News Page api test" });
});

app.post("/login", (req, res) => {
  console.log(req);
  console.log(req.body);
  res.send({
    status: 2,
    msg: "Login api test(post api cannot be directly displayed in browser!)",
    body: req.body,
    queryData: req.query,
  });
});

app.get("/paramtest/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("Params Api call with dynamic id" + currentId);
});

app.listen("8000");
