const express = require("express");
const router = express.Router();

//const ensureAuthenticated = require("../auth").ensureAuthenticated;
const models = require("../models");

//router.all("*", ensureAuthenticated);

/* GET all authors (users) */
router.get("/", (req, res, next) => {
    models.author
        .findById(req.user.id)
        .then(author => {
            res.json({ author: author });
            // res.render("author", {
            //     author: author
            // });
        })
        .catch(err => {
            next(err);
        });
});

router.get("/google/:id", (req, res, next) => {
    models.author
        .findOne({ where: { googleId: req.params.id } })
        .then(author => {
            res.json(author);
        })
        .catch();
});

module.exports = router;
