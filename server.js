const express = require('express');
const path = require('path');

const htmlRouter = ('./routes/html');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));

app.use(htmlRouter);

app.listen(PORT, () => console.log(`Listening for requests on port${PORT}!`));