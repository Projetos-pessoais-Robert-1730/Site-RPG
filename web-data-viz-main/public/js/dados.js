// Histórico geral (Até 25)
var históricoGlobal = []

// Histórico dos dados (Até 5) Feito num Json contendo listas para melhor entendimento

var dados = {

    historicoD3: [],
    historicoD4: [],
    historicoD6: [],
    historicoD8: [],
    historicoD10: [],
    historicoD12: [],
    historicoD18: [],
    historicoD20: [],
    historicoD100: []

}

// Lista para armazenar os valores dos Dados escritos manualmente pelo usuário
var listaDadosPersonalizado = []
var listaValoresPersonalizado = []
var historicoPersonalizada = [listaDadosPersonalizado, listaValoresPersonalizado]

// Dados principais existentes: d3, d4 ,d6 ,d8 ,d10 ,d12 ,d18, d20, d100

// Tentando deixar mais otimizado o JS:
function rolarDados(tipoDado, personalizado) {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(tipoDado-1) + 1).toFixed(0))
    
    var mensagem = ``

    if (personalizado == true) {
        var tamanho = Number(document.getElementById("iptValorDado").value)
        var metadeTamanho = tamanho/2
        var mensagem = ``
    
        if (isNaN(tamanho) || tamanho <= 1) {
            alert("Por favor, insira um número maior que 1.");
            return;
        }
    
        var aleatório = Math.random()    
        var resultado = Number((aleatório*(tamanho-1) + 1).toFixed())
    
        listaDadosPersonalizado.push(tamanho)
        listaValoresPersonalizado.push(resultado)
    
        verificarQuantidade(tipoDado, personalizado)
    
        for (var i = 0; i < listaDadosPersonalizado.length; i++) {
            var dadoAtual = Number(listaDadosPersonalizado[i])
            var numeroAtual = Number(listaValoresPersonalizado[i]);
            var color = `#D7B89E`
            var critico = `(Crítico - Valor máximo)`
    
            if (numeroAtual <= metadeTamanho) {
                color = `#BF3A53`
                critico = ``
    
            } else if (numeroAtual < tamanho) {
                color = `#32CD32`
                critico = ``
    
                // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
            }
    
            if(i == 4) {
                mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} ${critico} </p>`
            } else {
                mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} ${critico}, </p>`
            }
    
        }
    
        document.getElementById("resultadoPersonalizado").innerHTML = mensagem

        return
    
    }

    dados[`historicoD${tipoDado}`].push(resultado)

    verificarQuantidade(tipoDado,personalizado)

    var listaDadoAtual = dados[`historicoD${tipoDado}`]

    for (var i = 0; i < listaDadoAtual.length; i++) {
        var numeroAtual = Number(listaDadoAtual[i]);
        var color = `#BF3A53` // Vermelho
        var corNormal = "#32CD32"; // Verde
        var corCritica = "#D7B89E"; // Alaranjado

        // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	

        var critico = ""
        
        var metade = Math.floor(tipoDado/2)

        if (numeroAtual == tipoDado) {
            critico = "(Crítico - Valor máximo)";
            color = corCritica

        }else if (numeroAtual > (metade)) {
            color = corNormal
        
        }
        
        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} ${critico} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} ${critico}, </p>`
        }

    }

    // Adicionar dps o para mostrar em baixo do dado e ver dps se tem como colocar o de vantagem e desvantagem ou somar valor de acordo com o que for rolar, por exemplo, se ele clicar em adicionar desvantagem, ele rolar +1 dado e mostrar o menor valor
    document.getElementById(`resultadoD${tipoDado}`).innerHTML = mensagem
}   

function verificarQuantidade(tipoDado,personalizado) {
    
    var listaDadoAtual = dados[`historicoD${tipoDado}`]

    if (personalizado) {
        if(listaDadosPersonalizado.length > 5 ) {
            listaDadosPersonalizado.splice(0 , 1);
            listaValoresPersonalizado.splice(0 , 1);
        }

        return
    }

    if (listaDadoAtual) {
        if(listaDadoAtual.length > 5 ) {
            listaDadoAtual.splice(0 , 1);
        }
    }

    // Serve para apagar o primeiro indíce sempre que ele passa de 3 (É o splice que faz isso, o primeiro valor é pra falar a posição que é para ser excluída e o segundo valor (O dps da virgula) quantos serão apagados, nesse caso, 1 pois só é necessário apagar apenas o valor 0)

}
