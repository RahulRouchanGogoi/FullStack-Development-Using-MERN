let http = require("http");

let server = http.createServer((request, response) => {
  if (request.url == "/about") {
    response.end("Hi, I am Rahul Rouchan Gogoi!");
  } else if (request.url == "/") {
    response.end("Welcome to learn NodeJs!");
  }
});

server.listen("8000");
