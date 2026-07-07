function cadastrar(){

    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha !== confirmarSenha){

        alert("As senhas não são iguais!");
        return;
    }

    let usuario = {

        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        senha: senha
    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
}