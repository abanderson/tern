const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all entries */
router.get("/", (req, res, next) => {
    models.entry
        .findAll()
        .then(entry => {
            res.json(entry);
        })
        .catch(err => {
            next(err);
        });
});

/* GET all entries for a specific author (user) */
router.get("/:authorid", (req, res, next) => {
    models.entry
        .findAll({ where: { authorId: req.params.authorid } })
        .then(entries => {
            res.json(entries);
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;
