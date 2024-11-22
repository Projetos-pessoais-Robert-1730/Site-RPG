var database = require("../database/config")

function buscarDadosTipo() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosG():");
    
    var instrucaoSql = `
        SELECT COUNT(fkTipoDeJogador) AS "Quantidade", 
            tipoDeJogador.nome AS "Tipo" 
        FROM usuario 
            JOIN tipoDeJogador ON fktipoDeJogador = idtipoDeJogador 
        GROUP BY tipoDeJogador.nome;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function buscarDadosSistema() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosG():");
    
    var instrucaoSql = `
        SELECT COUNT(fkSistema) AS "Quantidade", 
            sistema.nome AS "Sistema" 
        FROM usuario 
            JOIN sistema ON fkSistema = idSistema 
        GROUP BY sistema.nome;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    buscarDadosTipo,
    buscarDadosSistema
};