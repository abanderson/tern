const express = require("express");
const router = express.Router();

// const ensureAuthenticated = require("../auth").ensureAuthenticated;
const models = require("../models");

// router.all("*", ensureAuthenticated);

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
        .findAll({
            where: { authorId: req.params.authorid },
            order: [["createdAt", "DESC"]]
        })
        .then(entries => {
            res.json(entries);
        })
        .catch(err => {
            next(err);
        });
});

/* POST: Add entry for specific author (user) */
router.post("/:authorid", (req, res, next) => {
    console.log(req);
    models.entry
        .create({
            content: req.body.content,
            publicContent: req.body.publicContent,
            isPublished: true,
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

router.get("/:authorid/public", (req, res, next) => {
    //console.log(req);
    models.entry
        .findAll({
            where: { authorId: req.params.authorid },
            order: [["createdAt", "DESC"]]
        })
        .then(entries => {
            let newEntries = entries.map(entry => {
                return entry.dataValues;
            });
            newEntries = newEntries.map(entry => {
                entry.content = entry.publicContent;
                return entry;
            });
            newEntries = newEntries.filter(entry => {
                return entry.content != null;
            });
            console.log(newEntries);
            res.json(newEntries);
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
