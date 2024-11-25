async function gerarResposta() {
    const pergunta = document.getElementById('pergunta').value;
    var h3 = document.getElementById('h3')

    const response = await fetch('/perguntar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pergunta })
    });

    const data = await response.json();

    h3.style.display = 'flex'
    resposta.style.display = 'block';
    document.getElementById('resposta').innerText = data.resultado;
}