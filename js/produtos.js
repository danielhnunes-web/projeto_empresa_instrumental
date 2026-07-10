import {produtos} from './lista_produtos.js'


const sectionCards = document.querySelector('#cards')

const listarProdutos = () => {

    sectionCards.innerHTML = ''

    produtos.forEach((elem, i) =>{
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')
    
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', elem.caminho_imagem)
        imgCard.setAttribute('alt', elem.descricao_produto)

        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'

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

    produtos.forEach((elem, i) => {
        mapSecoes.set(elem.id_secao, elem)
    })

    const secoesFiltradas = array.from(mapSecoes.value())

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

        liMenu.appendChild(aMenu)

        ulMenuSecoes.appendChild(liMenu)
        
    })
}

carregaSecoes()