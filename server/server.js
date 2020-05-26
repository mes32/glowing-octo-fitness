const express = require('express');
require('dotenv').config();

const server = express();

// Attach body parser
const bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Attach session middleware
const sessionMiddleware = require('./modules/session-middleware');
server.use(sessionMiddleware);

// Attach passport and initialize
const passport = require('./strategies/user.strategy');
server.use(passport.initialize());
server.use(passport.session());

// Configure Routes
const exerciseRouter = require('./routes/exercise.router');
const userRouter = require('./routes/user.router');

server.use('/api/exercise', exerciseRouter);
server.use('/api/user', userRouter);

// Serve the static site files from build directory
server.use(express.static('build'));

// Start the server listening on PORT = 5000
const PORT = process.env.PORT || 5000;
const serverHandle = server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});