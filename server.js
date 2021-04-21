const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3769;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
require("./app/routing/html_routes.js")(app);

app.listen(PORT, function () {
  console.log(`This server is up and running on port #${PORT}...`);
});
