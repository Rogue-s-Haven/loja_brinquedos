// script.js
const carrinho = carregarCarrinho();

// Adiciona o item ao carrinho e salva no localStorage
function adicionarAoCarrinho(index) {
    fetch('/produtos')
        .then(response => response.json())
        .then(produtos => {
            const produto = produtos[index];
            carrinho.push(produto);
            atualizarCarrinho();
            salvarCarrinho();
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
}

// Atualiza o conteúdo do carrinho na página
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

//limpar carrinho
function limparCarrinho() {
    carrinho.length = 0; // Remove todos os itens do array
    atualizarCarrinho();
    salvarCarrinho(); // Atualiza o localStorage
}

// Salva o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Carrega o carrinho do localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
}

// Exibe produtos na página
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

// Carrega o carrinho ao inicializar a página
atualizarCarrinho();

