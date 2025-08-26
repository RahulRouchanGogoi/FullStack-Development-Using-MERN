const addToCart = require("./CartModule");
const { testNamedExport, changeNum, name } = require("./NamedExport");

console.log("Hello World Node Js!");
console.log("Testing Nodemon");

console.log(addToCart())

console.log(testNamedExport());
console.log(changeNum());
console.log(name);



