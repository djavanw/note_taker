const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3769;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
  });

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

//Static Files with Express
app.use(express.static("public"));


// require("./app/routing/api_routes.js")(app);
// require("./app/routing/html_routes.js")(app);


app.listen(PORT, () => {
  console.log(`This server is up and running on port #${PORT}...`);
});
