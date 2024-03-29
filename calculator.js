//jshint eversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight / (height * height);

  res.send("The result of BMI Calculator is " + result);
});

app.listen(3000, function(){
  console.log("Server running on port 3000.");
});
