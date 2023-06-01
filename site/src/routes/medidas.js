var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idDashboard", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:livro", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/updateGeneros/:genero", function (req, res) {
    medidaController.updateGeneros(req, res);
})

module.exports = router;