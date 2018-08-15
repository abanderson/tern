const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all entries */
router.get("/", function(req, res, next) {
    models.entry.findAll().then(entry => {
        res.json(entry);
    });
});

module.exports = router;
