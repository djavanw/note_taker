const path = require("path");

module.exports = function (app) {
    
   
    app.get("/notes.html", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
        });

    //.use instead of .get for the homepage
    app.use( function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
    });




   
}