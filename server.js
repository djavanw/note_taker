const express = require("express");
//const fs = require("fs");
//const util = require("util");
//const path = require("path");
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

// //Routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// app.get("/api/notes", (req, res) => {
//   const readFile = util.promisify(fs.readFile);
//   readFile("./db/db.json").then((notes) => {
//     console.log(notes);
//     let notesToSend = [];
//     try {
//       notesToSend = JSON.parse(notes);
//       res.json(notesToSend)
//     } catch(err) {
//       res.json([])
//     }
//   });
// })

app.listen(PORT, () => {
  console.log(`This server is up and running on port #${PORT}...`);
});