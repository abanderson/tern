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

/* POST: Add entry for specific author (user) */
router.post("/:authorid", (req, res, next) => {
    models.entry
        .create({
            content: req.body.content,
            publicContent: req.body.publiccontent,
            isPublished: false,
            title: req.body.title,
            location: req.body.location,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            slug: "draft", // ToDo: Create logic for generating slug
            authorId: req.params.authorid
        })
        .then(entry => {
            res.json(entry);
        })
        .catch(err => {
            next(err);
        });
});

router.put("/:entryid", (req, res, next) => {
    models.entry
        .update(
            { content: req.body.content },
            { where: { id: req.params.entryid } }
        )
        .then(rowsUpdated => {
            res.json(rowsUpdated);
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;
