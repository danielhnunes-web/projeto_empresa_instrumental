let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let valorFrete = 0;

function adicionarCarrinho(nome, preco, imagem){

    const produto = carrinho.find(item => item.nome === nome);

    if(produto){
        produto.quantidade++;
    }else{
        carrinho.push({
            nome,
            preco,
            imagem,
            quantidade: 1
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();
    atualizarCarrinho();
}

function removerProduto(nome){

    carrinho = carrinho.filter(item => item.nome !== nome);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();
    atualizarCarrinho();
}

function aumentarQuantidade(nome){

    const produto = carrinho.find(item => item.nome === nome);

    if(produto){
        produto.quantidade++;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();
    atualizarCarrinho();
}

function diminuirQuantidade(nome){

    const produto = carrinho.find(item => item.nome === nome);

    if(produto){

        produto.quantidade--;

        if(produto.quantidade <= 0){
            removerProduto(nome);
            return;
        }
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();
    atualizarCarrinho();
}

function atualizarCarrinho() {

    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");

    // Se estiver no index.html, esses elementos não existem.
    if (!lista || !total) {
        return;
    }

    lista.innerHTML = "";

    let valorTotal = 0;

    carrinho.forEach(produto => {

        valorTotal += produto.preco * produto.quantidade;

        lista.innerHTML += `
            <li class="item-carrinho">
            <img src="../${produto.imagem}" alt="${produto.nome}" class="imagem-carrinho">
            
            <div>
                <strong>${produto.nome}</strong><br>
            
                <div class="controle-quantidade">
                    <button onclick="diminuirQuantidade('${produto.nome}')">−</button>
            
                    <span>${produto.quantidade}</span>
            
                    <button onclick="aumentarQuantidade('${produto.nome}')">+</button>
                </div>
            
                <strong>
                    R$ ${(produto.preco * produto.quantidade).toFixed(2)}
                </strong>
            </div>

                <button onclick="removerProduto('${produto.nome}')">
                    🗑️
                </button>
            </li>
        `;
    });

    total.textContent = valorTotal.toFixed(2).replace(".", ",");

    const totalFinal = document.getElementById("total-final");

    if (totalFinal) {
        let soma = valorTotal + valorFrete;

        totalFinal.textContent = soma.toFixed(2).replace(".", ",");
    }
}

function atualizarContador(){

    const contador = document.getElementById("contador");

    if(!contador) return;

    let quantidade = 0;

    carrinho.forEach(produto =>{
        quantidade += produto.quantidade;
    });

    contador.textContent = quantidade;
}

function calcularFrete(){

    const cep = document.getElementById("cep").value;
    const resultado = document.getElementById("resultado-frete");

    if(cep.length !== 8){

        resultado.textContent = "Digite um CEP válido!";
        return;
    }

    if(cep.startsWith("49")){

        valorFrete = 15;
    }else{
        valorFrete = 35;
    }

    resultado.textContent = 
    "Frete: R$ " + valorFrete.toFixed(2).replace(".", ",");

    atualizarCarrinho();
}

function finalizarCompra(){

    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra realizada com sucesso! Obrigado pela preferência.");

    carrinho = [];

    localStorage.removeItem("carrinho");

    valorFrete = 0;

    atualizarContador();
    atualizarCarrinho();

    const resultado = document.getElementById("resultado-frete");
    if(resultado){
        resultado.textContent = "";
    }

    const cep = document.getElementById("cep");
    if(cep){
        cep.value = "";
    }
}

window.onload = function(){

    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    atualizarContador();
    atualizarCarrinho();
}

window.adicionarCarrinho = adicionarCarrinho;
window.atualizarCarrinho = atualizarCarrinho;
window.removerProduto = removerProduto;
window.calcularFrete = calcularFrete;
window.atualizarContador = atualizarContador;
window.aumentarQuantidade = aumentarQuantidade;
window.diminuirQuantidade = diminuirQuantidade;
window.finalizarCompra = finalizarCompra;