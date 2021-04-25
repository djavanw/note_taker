const express = require("express");
const app = express();
const PORT = process.env.PORT || 3769;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());
app.use(express.static("public"));

//Routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`This server is up and running on port #${PORT}...`);
});