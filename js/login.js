function login(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if(!usuario){

        alert("Nenhum usuário cadastrado!");
        return;
    }

    if(email === usuario.email && senha === usuario.senha){

        localStorage.setItem("logado", "true");
        alert("Login realizado com sucesso!");
        window.location.href = "../index.html";

    }else{
        alert("Email ou senha incorretos!");
    }
}