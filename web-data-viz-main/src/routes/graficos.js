var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/mostrarTipo", function (req, res) {
    graficoController.mostrarGraficoTipo(req, res);
})

router.post("/mostrarSistema", function (req, res) {
    graficoController.mostrarGraficoSistema(req, res);
});

module.exports = router;