const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    pool.query('SELECT * FROM app_user WHERE id = $1;', [id]).then((result) => {
        const userRow = result && result.rows && result.rows[0];
        const user = {
            id: userRow.id,
            username: userRow.username,
            displayName: userRow.display_name,
            isAdmin: userRow.is_admin
        };
        if (!user) {
            done(null, false, { message: 'Incorrect credentials.' });
        } else {
            // delete user.password; // remove password so it doesn't get sent
            done(null, user);
        }
    }).catch((err) => {
        console.log('SQL query error deserializing user for authentication. ', err);
        done(err);
    });
});

passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'username',
}, ((req, usernameRaw, password, done) => {
    const username = usernameRaw.toLowerCase();
    const queryText = 'SELECT * FROM app_user WHERE username = $1;';
    pool.query(queryText, [username]).then((result) => {
        const user = result && result.rows && result.rows[0];
        if (user && encryptLib.comparePassword(password, user.password)) {
            done(null, user);
        } else if (user) {
            done(null, false, { message: 'Incorrect credentials.' });
        } else {
            done(null, false);
        }
    }).catch((err) => {
        console.log('SQL query error authenticating user with local strategy. ', err);
        done(null, {});
    });
})));

module.exports = passport;