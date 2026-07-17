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

async function buscarCEP() {
    const cep = document.getElementById("cep").value.replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("Digite um CEP válido.");
        return;
    }

    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }

        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    } catch (erro) {
        alert("Erro ao consultar o CEP.")
    }
}

window.onload = function(){
    document.getElementById("cep").addEventListener("blur", buscarCEP);
}