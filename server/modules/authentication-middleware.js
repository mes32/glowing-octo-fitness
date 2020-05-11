const rejectUnauthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(403);
    }
};

const rejectNonAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        next();
    } else {
        res.sendStatus(403);
    }
};

module.exports = { rejectUnauthenticated, rejectNonAdmin };