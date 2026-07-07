let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let valorFrete = 0;

function adicionarCarrinho(nome, preco){

    const produto = carrinho.find(item => item.nome === nome);

    if(produto){
        produto.quantidade++;
    }else{
        carrinho.push({
            nome,
            preco,
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
                <div>
                    <strong>${produto.nome}</strong><br>
                    Quantidade: ${produto.quantidade}<br>
                    R$ ${(produto.preco * produto.quantidade).toFixed(2)}
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

window.onload = function(){

    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    atualizarContador();
    atualizarCarrinho();
}