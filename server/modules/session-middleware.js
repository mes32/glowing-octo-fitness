const cookieSession = require('cookie-session');

const serverSessionSecret = () => {
    if (!process.env.SERVER_SESSION_SECRET ||
        process.env.SERVER_SESSION_SECRET.length < 8) {
        console.log('Warning: Environment variable SERVER_SESSION_SECRET should be set to a long random string!');
    }

    return process.env.SERVER_SESSION_SECRET;
};

module.exports = cookieSession({
    secret: serverSessionSecret(),
    key: 'user',
    resave: 'false',
    saveUninitialized: false,
    cookie: { maxage: 60000, secure: false },
});