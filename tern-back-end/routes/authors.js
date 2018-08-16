const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all authors (users) */
router.get("/", (req, res, next) => {
    models.author
        .findAll()
        .then(authors => {
            res.json(authors);
        })
        .catch(err => {
            next(err);
        });
});

/* GET route test to return all authors and their entries */
router.get("/test", (req, res, next) => {
    models.author
        .findAll({
            include: [{ model: models.entry }]
        })
        .then(authors => {
            res.json(authors);
        })
        .catch(err => {
            next(err);
        });
});

/* GET specific author */
router.get("/:id", (req, res, next) => {
    models.author
        .findById(req.params.id)
        .then(author => {
            res.json(author);
        })
        .catch(err => {
            next(err);
        });
});

// Add author

// Update author

// Delete author

module.exports = router;
