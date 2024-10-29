// script.js
const carrinho = [];

// Atualizar para que a função receba o índice do produto
function adicionarAoCarrinho(index) {
    fetch('/produtos')
        .then(response => response.json())
        .then(produtos => {
            const produto = produtos[index];
            carrinho.push(produto);
            atualizarCarrinho();
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
}

function atualizarCarrinho() {
    const carrinhoItensDiv = document.getElementById('carrinho-itens');
    carrinhoItensDiv.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');
        itemDiv.innerHTML = `
            <p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>
        `;
        carrinhoItensDiv.appendChild(itemDiv);
        total += item.preco;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

// Fetching and displaying products with index for the button
fetch('/produtos')
    .then(response => response.json())
    .then(produtos => {
        const produtosDiv = document.getElementById('produtos');
        produtos.forEach((produto, index) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                <img src="${produto.imagemUrl}" alt="${produto.nome}">
                <button onclick="adicionarAoCarrinho(${index})">Adicionar ao Carrinho</button>
            `;
            produtosDiv.appendChild(produtoDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));
