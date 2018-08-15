const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all collections */
router.get("/", function(req, res, next) {
    models.collection.findAll().then(collection => {
        res.json(collection);
    });
});

module.exports = router;
