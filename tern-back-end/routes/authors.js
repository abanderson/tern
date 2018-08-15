const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all authors (users) */
router.get("/", function(req, res, next) {
    models.author
        .findAll()
        .then(authors => {
            res.json(authors);
        })
        .catch(err => {
            next(err);
        });
});

/* GET specific author */
router.get("/:id", function(req, res, next) {
    models.author
        .findById(req.params.id)
        .then(author => {
            res.json(author);
        })
        .catch(err => {
            next(err);
        });
});

// Update author

// Delete author

module.exports = router;
