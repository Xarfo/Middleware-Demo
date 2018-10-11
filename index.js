const express = require('express');

const server = express();

const logger = (req, res, next) => {
// next will be called in every middleware we build
// It determines when to go to the next piece of middleware
console.log(`${Date.now()} ${req.method} made to ${req.url}`);
next();
};

//Plugs global middleware into our server
server.use(logger);

server.get('/api', (req, res) => {
    res.send('Hello-World!');
});

const port = 7000;
server.listen(port, () => console.log(`API is running on ${port}`));

