const express = require('express'); // require express
const fs = require('fs');
const path = require('path');
//===================================================================
const notesJson = require('./db/db.json');
const PORT = process.env.PORT || 3001;
const app = express(); //instantiate the server
//===================================================================

//middleware
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//=====================================================================
//create new notes. noteJson =db.json
function createNewNotes(body) {
   console.log(notesJson);
    const note = body;
   notesJson.push(note);
    fs.writeFileSync(
      path.join(__dirname,'./db/db.json'),
      JSON.stringify(notesJson,null,2) // null & 2
    );
    //return finished code to post the route for response
    return note;
    }
//=====================================================================
//Fetch Data from json
app.get('/api/notes', (req, res) => {
    let results = notesJson;
    res.json(results);
  });

//=====================================================================
//Post data to save data: Reference index.js line 37
  app.post('/api/notes', (req, res) => {
    console.log(req.body)
    const notes=createNewNotes(req.body);  
    res.json(req.body);
    });

//==================================================================
//html routes
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
  })
  
  app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/notes.html'));
  })
 
  //The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'))
  })

//===================================================================
//Delete Data


//Listen=============================================================

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });