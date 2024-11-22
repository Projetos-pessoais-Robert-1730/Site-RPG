function logar() {
    var emailVar = document.getElementById("ipt_email").value;
    var senhaVar = document.getElementById("ipt_senha").value;

    if (emailVar == "") {
        div_validaçãoEmail.innerHTML = `Insira algo no campo email`

    } else if(senhaVar == "") {
        div_validaçãoSenha.innerHTML = `Insira algo no campo senha`

    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

                setTimeout(function () {
                    window.location = "../index.html";
                }, 1000); // apenas para exibir o loading
            });

        } 

        // Fazer uma mensagem de erro quando não for e adicionar um aviso de redirecionamento

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}