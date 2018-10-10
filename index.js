const express = require('express');

const server = express();

const port = 7000;
server.listen(port, () => console.log(`API is running on ${port}`));

server.get('/api', (req, res) => {
    res.send('Hello-World!');
});