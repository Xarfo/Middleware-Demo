const express = require('express');

const server = express();

//Call middlewares always before routes and server.listen()
const logger = (req, res, next) => {
// next will be called in every middleware we build
// It determines when to go to the next piece of middleware
console.log(`${Date.now()} ${req.method} made to ${req.url}`);
next();
};

//Plugs global(in existence across our app) middleware into our server
server.use(logger);

// Routes
server.get('/api', (req, res) => {
    res.send('Hello-World!');
});

//Call server.listen() method that creates listner @ port 7000
const port = 7000;
server.listen(port, () => console.log(`API is running on ${port}`));

