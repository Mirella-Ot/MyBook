var express = require("express");
var router = express.Router();

var lista_Controller = require("../controllers/lista_Controller");

router.get("/ultimas/:idDashboard", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:livro", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.post("/updateGeneros/:genero", function (req, res) {
    medidaController.updateGeneros(req, res);
});

router.get("/lista_favoritos/:transferir", function (req, res) {
    lista_Controller.transferir(req, res);
});

router.get("/addFavoritos/:fkUsuario/:fkLivro", function (req, res) {
    lista_Controller.addFavoritos(req, res);
});
router.get("/lista_livros/:fkUsuario", function (req, res) {
    lista_Controller.addFavoritos(req, res);
});

module.exports = router;