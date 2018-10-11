// pull in express
const express = require('express');
const port = 9000;

// instanciate your server
const server = express();

// MIDDLEWARES
const logger = (req, res, next) => {
  // next will be called in EVERY piece of middleware we build
  // it will determine when to go, to the next piece of middleware.
  console.log(`${Date.now()} ${req.method} made to ${req.url}`);
  next();
};

const greeter = (req, res, next) => {
    req.section = 'FSW-13';
    next();
};

const yell = (req, res, next) => {
    const newName = req.params.name.toUpperCase();
    req.name = newName;
    next();
}
 


//Plugs in logger which is a global middleware into our server
server.use(logger);
// built a GET endpoint to `/` that returns the string hello world to the client.

// ROUTES

server.get('/section', greeter, (req, res) => {
    res.send(`Hello ${req.section}, NVM`);
});

server.get('/', (req, res) => {
  res.send('Cowabunga!');
});

server.get('/rapha', (req, res) => {
  res.send('I am Raphael');
});

server.get('/name/:name', yell, (req, res) => {
    res.send(req.name);
});

// call server.listen w/ a port of your choosing
server.listen(port, () => {
  console.log(`Booyahkasha happening on ${port}`);
});
// hit your port+/ to see "hello wold!"

