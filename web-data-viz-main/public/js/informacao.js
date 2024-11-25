var contador = 1;
document.getElementById("radio1").checked = true;

// function nextImage() {
//     contador++
//     if (contador > 4) {
//         contador = 1
//     }

//     document.getElementById("radio"+contador).checked = true
// }

// setInterval( function(){
//     nextImage()
// }, 2000) 

function mostrarGraficos() {
    mostrarGraficoTipo()
    mostrarGraficoSistema()

}

function mostrarGraficoTipo() {
        
    fetch("/graficos/mostrarTipo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }

    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        resposta.json().then(json => {
            // Pegando a resposta do Banco de dados
            var listaJogador = json.listaFinal;

            // Listas para salvar o tipo e a quantidade
            var listaTipo = [];
            var listaQuantidade = [];

            for(var cont = 0; cont < listaJogador.length; cont++) {
                var quantidadeAtual = listaJogador[cont].Quantidade;
                var tipoAtual = listaJogador[cont].Tipo;

                listaTipo.push(`'${tipoAtual}'`);
                listaQuantidade.push(quantidadeAtual);
                
            }

            var ctx = document.getElementById('graficoTipo');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: listaTipo,
                    borderColor: ['#ff0000' , '#F12323', '#123423'],
                    datasets: [{
                        data: listaQuantidade,
                        borderWidth: 1
                    }],
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }})
        })
    })
}

function mostrarGraficoSistema() {
        
    fetch("/graficos/mostrarSistema", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }

    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        resposta.json().then(json => {
            // Pegando a resposta do Banco de dados
            var listaSistema = json.listaFinal;

            // Listas para salvar o tipo e a quantidade
            var listaTipo = [];
            var listaQuantidade = [];

            for(var cont = 0; cont < listaSistema.length; cont++) {
                var quantidadeAtual = listaSistema[cont].Quantidade;
                var tipoAtual = listaSistema[cont].Sistema;

                listaTipo.push(`'${tipoAtual}'`);
                listaQuantidade.push(quantidadeAtual);
                
            }

            var ctx = document.getElementById('graficoSistema');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: listaTipo,
                    borderColor: ['#ff0000' , '#F12323', '#123423','#000000'],
                    datasets: [{
                        data: listaQuantidade,
                        borderWidth: 1
                    }],
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                }})
        })
    })
}