const express = require("express");
const router = express.Router();

let user;
const database = new Map();

router.get("/testAPI", function (req, res, next) {
    res.send("Express API is working properly");
});

router.get("/getUser", function (req, res, next) {
    res.send({login: user});
});

router.get("/getUser", function (req, res, next) {
    res.send({login: user});
});

router.get("/getUserList", function (req, res, next) {
    res.send(getUserList());
});

router.post("/reg", function (req, res, next) {
    const curUser = saveUser(req.body);
    res.send(curUser);
});

router.post("/log", function (req, res, next) {
    const curUser = getUser(req.body);

    if (typeof curUser === 'number') {
        res.sendStatus(curUser);
    } else {
        res.send(curUser);
    }
});

router.post("/logout", function (req, res, next) {
    user = undefined;
    res.sendStatus(200);
});


function saveUser(data) {
    let email = data.email;
    let password = data.password;

    if (database.has(email)) {
        user = email;
        return {login: email};
    } else {
        database.set(email, password);
        user = email;
        return {login: email};
    }
}

function getUserList() {
    return database.entries()
}

function getUser(data) {
    let email = data.email;
    let password = data.password;

    if (database.has(email)) {
        if (database.get(email) === password) {
            user = email;
            return {login: email};
        } else {
            return 401;
        }
    } else {
        return 401;
    }
}


module.exports = router;