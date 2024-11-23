// Váriaveis para validação

var nomeValidado = false
var emailValidado = false
var senhaValidado = false
var confirmacaoValidado = false

function cadastrar(){

    //variaveis para as inputs

    var nome = document.getElementById("ipt_nome").value
    var email = document.getElementById("ipt_email").value
    var senha = document.getElementById("ipt_senha").value
    var confirmacao = document.getElementById("ipt_confirmaçãoSenha").value
    var sistemaFavorito = document.getElementById("slt_sistemaFavorito").value
    var tipo = document.getElementById("slt_tipoDeJogador").value

    // Validações para redirecionar
 
    if(nomeValidado == false || emailValidado == false || senhaValidado == false || confirmacaoValidado == false){

        //validar nome

        if(nome.length > 0){
            div_validaçãoNome.innerHTML = `✅`;
            nomeValidado = true

        } else {
            div_validaçãoNome.innerHTML = `⛔ Insira um nome válido `;
            nomeValidado = false
        }


        //validação do email

        if (email.includes("@")) {
            div_validaçãoEmail.innerHTML = `✅`
            emailValidado = true

        } else {
            div_validaçãoEmail.innerHTML = `⛔ Insira um email válido `
            emailValidado = false
        }
   
        //Validação da senha

        if(senha.includes(" ")){
            div_validaçãoSenha.innerHTML = `Espaços não são permitidos` 
        }

        //variaveis pro if e for da senha

        var temNumero = false;
        var temNumeroCorreto = `⛔`
        var temLetram = false;
        var temLetramCorreto= `⛔`;
        var temLetraM = false;
        var temLetraMCorreto= `⛔`;

        if (senha.length >= 8){
            for (var atual = 0; atual < senha.length; atual++) {
                var atual2 = senha[atual];
       
                if(atual2 >= 'A' && atual2 <= 'Z') {
                    temLetraM = true;
                    temLetraMCorreto = `✅`

                } else if (atual2 >= 'a' && atual2 <= 'z') {
                    temLetram = true;
                    temLetramCorreto = `✅`

                } else if (atual2 >= '0' && atual2 <= '9') { 
                    temNumero = true;
                    temNumeroCorreto = `✅`
                }
            }

            if (temLetraM && temLetram && temNumero) {
                div_validaçãoSenha.innerHTML = `✅`;
                senhaValidado = true

            } else {
                div_validaçãoSenha.innerHTML = 
                    ` ⛔ Senha deve conter ao menos 8 caracteres válidos:<br>
                    ${temLetraMCorreto} Letra(s) Maiúscula(s), ${temLetramCorreto} minúsculas(s), ${temNumeroCorreto}número(s)`
                senhaValidado = false
            }

        } else {
            div_validaçãoSenha.innerHTML = `⛔ Senha deve ter pelo menos 8 caracteres.`;
        }


        //confirmação da senha

        if(confirmacao.length >= 8) {
            if(confirmacao == senha) {
   
            div_validaçãoSenha2.innerHTML = `✅`;
            confirmacaoValidado = true

            } else {
   
            div_validaçãoSenha2.innerHTML = ` ⛔ Senhas diferentes`; 
            confirmacaoValidado = false
            }
        } else {
   
            div_validaçãoSenha2.innerHTML = `⛔ Insira algo válido`;
            confirmacaoValidado = false
        } 

        if(nomeValidado && emailValidado && senhaValidado && confirmacaoValidado){
            // botao.innerHTML = `Logar`

            ipt_nome.readOnly = true
            ipt_email.readOnly = true
            ipt_senha.readOnly = true
            ipt_confirmaçãoSenha.readOnly = true

            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  // crie um atributo que recebe o valor recuperado aqui
                  // Agora vá para o arquivo routes/usuario.js
                  nomeServer: nome,
                  emailServer: email,
                  senhaServer: senha,
                  idSistemaServer: sistemaFavorito,
                  idTipoServer: tipo
        
                }),
              })
                .then(function (resposta) {
                  console.log("resposta: ", resposta);
          
                  if (resposta.ok) {
                    setTimeout(() => {
                      window.location = "login.html";
                    }, "2000");
        
                  } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                  }
                })
                .catch(function (resposta) {
                  console.log(`#ERRO: ${resposta}`);
                  alert("Tem alguém usando esse email")
                });
        }

    }

}
