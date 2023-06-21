// requires
const express = require('express');

const htmlRouter = require('./routes/html');
const apiRouter = require('./routes/api');

// middleware and port
const app = express();
// specify which port to use
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(htmlRouter);
app.use('/api', apiRouter);

// listens for incoming connections on the specified port
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));