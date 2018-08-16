const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all collections */
router.get("/", (req, res, next) => {
    models.collection
        .findAll()
        .then(collections => {
            res.json(collections);
        })
        .catch(err => {
            next(err);
        });
});

/* GET all collections for a specific author (user) */
router.get("/:authorid", (req, res, next) => {
    models.collection
        .findAll({ where: { authorId: req.params.authorid } })
        .then(collections => {
            res.json(collections);
        })
        .catch(err => {
            next(err);
        });
});

/* GET one collection by name for a specific author (user) */
router.get("/:authorid/:name", (req, res, next) => {
    models.collection
        .findOne({
            where: {
                name: { $iLike: req.params.name },
                authorId: req.params.authorid
            }
        })
        .then(collection => {
            res.json([collection]);
        })
        .catch(err => {
            next(err);
        });
});

router.post("/", (req, res, next) => {
    models.collection
        .findOrCreate({
            where: {
                name: req.body.name,
                authorId: req.body.author
            }
        })
        .spread((collection, created) => {
            res.json({
                created: created,
                collection: collection
            });
        })
        .catch(err => {
            next(err);
        });
});

// Add collection

// Update collection

// Delete collection

module.exports = router;
