const Swagger = require("swagger-client");

const request = {
  url: "http://developer.wordnik.com/v4/word.json/word",
  method: "GET"
};

Swagger.http(request)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });
