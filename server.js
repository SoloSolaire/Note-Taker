const express = require('express');
const path = require('path');

const htmlRouter = require('./routes/html');
const apiRouter = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(htmlRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));