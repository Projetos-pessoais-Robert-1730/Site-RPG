var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.post("/mostrar-grafico", function (req, res) {
    graficoController.mostrarGrafico(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;