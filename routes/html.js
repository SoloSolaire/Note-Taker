// requires
const html = require('express').Router();
const path = require('path');

// creates routes for default and '/routes' endpoints
html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// exports router to be used in server.js
module.exports = html;