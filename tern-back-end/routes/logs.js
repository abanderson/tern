const express = require("express");
const router = express.Router();
const models = require("../models");

/* GET all entries */
router.get("/", function(req, res, next) {
    models.log.findAll().then(log => {
        res.json(log);
    });
});

module.exports = router;
