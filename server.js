const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/contact', (req, res) => {
    console.log('post route working');
    res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
