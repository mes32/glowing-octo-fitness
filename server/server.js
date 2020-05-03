const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
const userRouter = require('./routes/user.router');

app.use('/api/user', userRouter);

// Serve the static site files from build directory
app.use(express.static('build'));

// Start the server listening on PORT = 5000
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});