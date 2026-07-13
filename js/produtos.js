import {produtos} from './lista_produtos.js'


const sectionCards = document.querySelector('#cards')

const listarProdutos = () => {

    sectionCards.innerHTML = ''

    const produtosExibir = typeof id_secao !== 'undefined'
    ? produtos.filter(produtos => produtos.id_secao === id_secao)
    :produtos

    produtosExibir.forEach((elem, i) =>{
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const caminhoImagem = typeof id_secao !== 'undefined'
        ? '../' + elem.caminho_imagem
        :elem.caminho_imagem
    
        const imgCard = document.createElement('img')
        imgCard.src = caminhoImagem
        imgCard.alt = elem.descricao_produto

        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

        btnCard.addEventListener('click', ()=>{
            adicionarCarrinho(
                elem.descricao_produto,
                parseFloat(elem.valor_unitario),
                elem.caminho_imagem
            );
        });

        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)
        
        sectionCards.appendChild(divCard)
    })

}

listarProdutos()


const menuSecoes = () => {
    const mapSecoes = new Map()

    produtos.forEach((elem)=>{
        mapSecoes.set(elem.id_secao, elem)
    })

    const secoesFiltradas = Array.from(mapSecoes.values());

    return secoesFiltradas
}

const carregaSecoes = () => {
    const ulMenuSecoes = document.querySelector('#menu-secoes')

    ulMenuSecoes.innerHTML = ''

    menuSecoes().forEach((elem, i) => {
        const liMenu = document.createElement('li')
        
        const aMenu = document.createElement('a')
        aMenu.setAttribute('href', '#')
        aMenu.setAttribute('class', 'lnk-secao')
        aMenu.innerHTML = elem.secao

        aMenu.addEventListener('click', ()=> {
            montaCards(filtroProduto(elem.id_secao))
        })

        liMenu.appendChild(aMenu)

        ulMenuSecoes.appendChild(liMenu)
        
    })
}

carregaSecoes()


const filtroProduto = (idSecao)=> {
    return produtos.filter(elem => elem.id_secao === idSecao)
}


const montaCards = (objProdutos) => {
    sectionCards.innerHTML = '';

    objProdutos.forEach((elem) => {

        const divCard = document.createElement('div');
        divCard.className = 'card';

        const imgCard = document.createElement('img');
        imgCard.src = elem.caminho_imagem;
        imgCard.alt = elem.descricao_produto;

        const pCard = document.createElement('p');
        pCard.textContent = elem.descricao_produto;

        const h2Card = document.createElement('h2');
        h2Card.textContent = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;

        const btnCard = document.createElement('button');
        btnCard.className = 'btn-add';
        btnCard.textContent = 'Adicionar';

        btnCard.addEventListener('click', () => {
            adicionarCarrinho(
                elem.descricao_produto,
                parseFloat(elem.valor_unitario),
                elem.caminho_imagem
            );
        });

        divCard.appendChild(imgCard);
        divCard.appendChild(pCard);
        divCard.appendChild(h2Card);
        divCard.appendChild(btnCard);

        sectionCards.appendChild(divCard);
    });
};



const campoPesquisa = document.getElementById('campo-pesquisa');

campoPesquisa.addEventListener('input', () => {
   
    const termoBusca = campoPesquisa.value.toLowerCase();
    
    const cards = document.querySelectorAll('#cards .card');

    cards.forEach(card => {
       
        const nomeProduto = card.querySelector('p').textContent.toLowerCase();

        if (nomeProduto.includes(termoBusca)) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
});