const express = require("express");
const router = express.Router();

const ensureAuthenticated = require("../auth").ensureAuthenticated;
const models = require("../models");

router.all("*", ensureAuthenticated);

/* GET all authors (users) */
router.get("/", (req, res, next) => {
    models.author
        .findById(req.user.id)
        .then(author => {
            //res.json(author);
            res.render("author", {
                author: author
            });
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;
