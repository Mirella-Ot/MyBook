var express = require("express");
var router = express.Router();


var livrosController = require("../controllers/livrosController");

router.get("/", function (req, res) {
    livrosController.listar(req, res);
});

router.get("/exibir", function (req, res) {
    livrosController.listar(req, res);
});


module.exports = router;