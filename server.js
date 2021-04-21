const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3769;
 
app.get('/', function (req, res) {
  res.send("If you see this in a browser, then the Server is up and running.")
})
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function () {
  console.log(`This server is up and running on port #${PORT}...`);
});
