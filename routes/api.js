const api = require('express').Router();
const fs = require('fs');
let notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

api.get('/notes', (req, res) => {
    res.json(notes);
});

api.post('/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    notes.push(newNote);
    res.json(newNote);

    let notesString = JSON.stringify(notes);

    fs.writeFile('./db/db.json', notesString, (err) => 
    (err ? console.error(err) : console.log(`A new note has been added.`)))
});

module.exports = api;