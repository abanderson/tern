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

/* POST: Add author */
// This route needs to be updated to only find author based
// on Google ID or Facebook ID. If not found, create new user
router.post("/", (req, res, next) => {
    models.author
        .findOrCreate({
            where: {
                username: req.body.username,
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                photoUrl: req.body.photourl,
                googleIdToken: req.body.googleidtoken,
                facebookIdToken: req.body.facebookidtoken
            }
        })
        .spread((author, created) => {
            res.json({
                created: created,
                author: author
            });
        })
        .catch(err => {
            next(err);
        });
});

// Update author

// Delete author

module.exports = router;
