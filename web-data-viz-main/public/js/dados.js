// Histórico geral (Até 25)
var históricoGlobal = []

// Histórico dos dados (Até 5)
var historicoD3 = []
var historicoD4 = []
var historicoD6 = []
var historicoD8 = []
var historicoD10 = []
var historicoD12 = []
var historicoD18 = []
var historicoD20 = []
var historicoD100 = []

// Lista para armazenar os valores dos Dados escritos manualmente pelo usuário
var listaDadosPersonalizado = []
var listaValoresPersonalizado = []
var historicoPersonalizada = [listaDadosPersonalizado, listaValoresPersonalizado]

// Dados principais existentes: d3, d4 ,d6 ,d8 ,d10 ,d12 ,d18, d20, d100

function rolarD3() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(2) + 1).toFixed(0))
    historicoD3.push(resultado)
    históricoGlobal.push(resultado)
    
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD3.length; i++) {
        var numeroAtual = Number(historicoD3[i]);
        var color = `#D7B89E`

        if (numeroAtual < 2) {
            color = `#BF3A53`

        } else if (numeroAtual < 3) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    // Adicionar dps o para mostrar em baixo do dado e ver dps se tem como colocar o de vantagem e desvantagem ou somar valor de acordo com o que for rolar, por exemplo, se ele clicar em adicionar desvantagem, ele rolar +1 dado e mostrar o menor valor
    document.getElementById("resultadoD3").innerHTML = mensagem
}   

function rolarD4() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(3) + 1).toFixed(0))
    historicoD4.push(resultado)
    históricoGlobal.push(resultado)

    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD4.length; i++) {
        var numeroAtual = Number(historicoD4[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 2) {
            color = `#BF3A53`

        } else if (numeroAtual < 4) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD4").innerHTML = mensagem

}   

function rolarD6() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(5) + 1).toFixed(0))
    historicoD6.push(resultado)
    históricoGlobal.push(resultado)

    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD6.length; i++) {
        var numeroAtual = Number(historicoD6[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 3) {
            color = `#BF3A53`

        } else if (numeroAtual < 5) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD6").innerHTML = mensagem

}   

function rolarD8() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(7) + 1).toFixed(0))
    historicoD8.push(resultado)
    históricoGlobal.push(resultado)
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD8.length; i++) {
        var numeroAtual = Number(historicoD8[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 4) {
            color = `#BF3A53`

        } else if (numeroAtual < 7) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD8").innerHTML = mensagem

}   

function rolarD10() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(9) + 1).toFixed(0))
    historicoD10.push(resultado)
    históricoGlobal.push(resultado)
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD10.length; i++) {
        var numeroAtual = Number(historicoD10[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 5) {
            color = `#BF3A53`

        } else if (numeroAtual < 9) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD10").innerHTML = mensagem

}   

function rolarD12() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(11) + 1).toFixed(0))
    historicoD12.push(resultado)
    históricoGlobal.push(resultado)
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD12.length; i++) {
        var numeroAtual = Number(historicoD12[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 6) {
            color = `#BF3A53`

        } else if (numeroAtual < 12) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD12").innerHTML = mensagem

}   

function rolarD18() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(17) + 1).toFixed(0))
    historicoD18.push(resultado)
    históricoGlobal.push(resultado)
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD18.length; i++) {
        var numeroAtual = Number(historicoD18[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 9) {
            color = `#BF3A53`

        } else if (numeroAtual < 18) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD18").innerHTML = mensagem

}   

function rolarD20() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(19) + 1).toFixed(0))
    historicoD20.push(resultado)
    históricoGlobal.push(resultado)
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD20.length; i++) {
        var numeroAtual = Number(historicoD20[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 10) {
            color = `#BF3A53`

        } else if (numeroAtual < 19) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD20").innerHTML = mensagem

}   

function rolarD100() {
    var aleatório = Math.random()
    var resultado = Number(((aleatório)*(99) + 1).toFixed(0))
    historicoD100.push(resultado)
    históricoGlobal.push(resultado)
    var mensagem = ``

    verificarQuantidade()

    for (var i = 0; i < historicoD100.length; i++) {
        var numeroAtual = Number(historicoD100[i]);
        var color = `#D7B89E`

        if (numeroAtual <= 50 && numeroAtual > 1) {
            color = `#BF3A53`

        } else if (numeroAtual < 100 && numeroAtual > 1) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoD100").innerHTML = mensagem

}   

function rolarPersonalizado() {
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

    verificarQuantidade()

    for (var i = 0; i < listaDadosPersonalizado.length; i++) {
        var dadoAtual = Number(listaDadosPersonalizado[i])
        var numeroAtual = Number(listaValoresPersonalizado[i]);
        var color = `#D7B89E`

        if (numeroAtual <= metadeTamanho) {
            color = `#BF3A53`

        } else if (numeroAtual < tamanho) {
            color = `#32CD32`
            // Verificar qual desses fica melhor: #32CD32, #00FF00, #7CFC00, #7FFF00, #228B22	
        }

        if(i == 4) {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual} </p>`
        } else {
            mensagem += `<p style="color: ${color};"> ${i+1}º ${numeroAtual}, </p>`
        }

    }

    document.getElementById("resultadoPersonalizado").innerHTML = mensagem

}

function verificarQuantidade() {

    // Serve para apagar o primeiro indíce sempre que ele passa de 3 (É o splice que faz isso, o primeiro valor é pra falar a posição que é para ser excluída e o segundo valor (O dps da virgula) quantos serão apagados, nesse caso, 1 pois só é necessário apagar apenas o valor 0)

    if(históricoGlobal.length > 25) {
        históricoGlobal.splice(0 , 1);
    }
    
    if(historicoD3.length > 5 ) {
        historicoD3.splice(0 , 1);
    }

    if(historicoD4.length > 5 ) {
        historicoD4.splice(0 , 1);
    }

    if(historicoD6.length > 5 ) {
        historicoD6.splice(0 , 1);
    }

    if(historicoD8.length > 5 ) {
        historicoD8.splice(0 , 1);
    }

    if(historicoD10.length > 5 ) {
        historicoD10.splice(0 , 1);
    }

    if(historicoD12.length > 5 ) {
        historicoD12.splice(0 , 1);
    }

    if(historicoD18.length > 5 ) {
        historicoD18.splice(0 , 1);
    }

    if(historicoD20.length > 5 ) {
        historicoD20.splice(0 , 1);
    }

    if(historicoD100.length > 5 ) {
        historicoD100.splice(0 , 1);
    }

    if(listaDadosPersonalizado.length > 5 ) {
        listaDadosPersonalizado.splice(0 , 1);
        listaValoresPersonalizado.splice(0 , 1);
    }

}
