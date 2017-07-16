//Defines dependencies
const express = require('express');
const body-parser = require('body-parser');
const path = require('path');


//Express setup
const app = express();
const port = 3500;


function homePage(url, req, res) {
  fs.readFile()
}

function surveyPage(url, req, res) {
  fs.readFile()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes defined here
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function(err) {
  if (err) {
    return console.error(err)
  }
  console.log("App listening on PORT " + port);
});
