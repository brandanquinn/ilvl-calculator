const express = require('express');
const csv = require('csv');
const { getLevelObjWrapper } = require('./utils/parseCsv');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client', 'public')));

app.get('/api/info', (req, res, next) => {
    getLevelObjWrapper().then((levelObj) => { 
        res.json(levelObj); 
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;