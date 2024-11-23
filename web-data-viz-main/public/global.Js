// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        
        var botaoCadastro = document.getElementById("botaoCadastro");
        var divBotao = document.getElementById("divBotaoCadastro");
        var spanNomeUsuario = document.getElementById("spanUsuario");

        var primeiroNome = nome.split(" ")[0];

        botaoCadastro.style.display = "none";

        divBotao.innerHTML += `<button id="button_logout" onclick="limparSessao()">Sair</button>`;
        spanNomeUsuario.innerHTML = ` ${primeiroNome}`;

    } 
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";

}

function mudarSenha() {

    var inputSenha = document.getElementById("input_senha")
    var buttonSenha = document.getElementById("olhoSenha")

    if(inputSenha.type == "password") {
      inputSenha.type = "text"
      buttonSenha.src = "../assets/img/vendoSenha.png"

    } else {
      inputSenha.type = "password"
      buttonSenha.src = "../assets/img/naoVendoSenha.png"
    }

  }

validarSessao()