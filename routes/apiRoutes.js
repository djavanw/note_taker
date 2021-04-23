//This is the database "array"  All CRUD is done from this file
let noteData = require("../db/db.json");

//This will give each note a UUID
const { v4: uuidv4 } = require('uuid');

//This will allow updating(post) and deleting of notes
const fs = require("fs");

//Routing to the index.js file for CRUD
module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(noteData);
    });
//Above is from index.js const getNotes

    app.post("/api/notes", (req, res) => {
        req.body.id = uuidv4()
        noteData.push(req.body)
        fs.writeFileSync("./db/db.json", JSON.stringify(noteData))
        console.log("NoteData", noteData)
        res.json(noteData)
    });
//Above is from index.js const saveNote
    
    app.delete("/api/notes/:id", (req, res) => {
          noteData = noteData.filter(note => note.id != req.params.id)   
          fs.writeFileSync("./db/db.json", JSON.stringify(noteData))
          res.json(noteData)
    });
//Above is from index.js const deleteNote

}

