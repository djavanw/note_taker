const noteDb = require("../data/note_db.js");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(noteDb);
    });
}