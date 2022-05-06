//Add all the routes

//import files
const router = require("express").Router();
const { createNewNote, validateNote } = require("/noteTaker.js");
const { notes } = require("../../db/db.json");


//============================================
router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });



  //==========================================
  router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();
  
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
      res.status(400).send("The Note is not properly formatted.");
    } else {
      const notes = createNewNotes(req.body, Notes);
      res.json(notes);
    }
  });
  
  module.exports = router;