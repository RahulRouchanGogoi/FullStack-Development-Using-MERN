


let checkToken = (req, res, next) => {
  console.log(req.query.token);

  if (req.query.token == "" || req.query.token==undefined) {
    return res.send({ status: 0, msg: "please fill the token" });
  }
  if (req.query.token != process.env.myToken) {
    return res.send({ status: 0, msg: "please fill the correct token" });
  }
  console.log("Welcome!");
  next();
};


module.exports={checkToken}