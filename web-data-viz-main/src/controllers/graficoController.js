var graficoModel = require("../models/graficoModel");

function mostrarGrafico(req, res) {

        graficoModel.buscarDadosTipo()
            .then(
                function (lista) {
                    res.json({
                        listaFinal: lista
                    })
                    console.log(lista[0].Tipo + ' TESTE AQUI');
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



module.exports = {
    mostrarGrafico
}