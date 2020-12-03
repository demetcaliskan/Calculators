const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var result = calculate(Number(req.body.num1), Number(req.body.num2));
  res.send("The result is: "+result);
});

app.listen(3000, function() {
  console.log("Example app listening at http://localhost:3000");
});

function calculate(num1, num2) {
  var result = num1 + num2;
  return result;
}
