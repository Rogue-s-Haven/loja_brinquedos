const carrinho = carregarCarrinho();

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

function atualizarCarrinho() {
    const carrinhoItensDiv = document.getElementById('carrinho-itens');
    carrinhoItensDiv.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');
        itemDiv.innerHTML = `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
        carrinhoItensDiv.appendChild(itemDiv);
        total += item.preco;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function limparCarrinho() {
    carrinho.length = 0;
    atualizarCarrinho();
    salvarCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
}

// Exibe produtos na página
fetch('/produtos')
    .then(response => response.json())
    .then(produtos => {
        const produtosDiv = document.getElementById('produtos');
        produtosDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-center');

        produtos.forEach((produto, index) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto', 'card', 'm-2', 'text-center');
            produtoDiv.style.width = '18rem';

            produtoDiv.innerHTML = `
                <h5 class="card-header">${produto.nome}</h5>
                <div class="imagem-descricao card-body">
                    <img src="${produto.imagemUrl}" alt="${produto.nome}" class="card-img-top imagem-produto mb-3" style="max-height: 200px; object-fit: cover;">
                    <p class="descricao card-text" style="display: none;">${produto.descricao}</p>
                </div>
                <p class="card-text">Preço: R$ ${produto.preco.toFixed(2)}</p>
                <button class="btn btn-primary mb-2" onclick="adicionarAoCarrinho(${index})">Adicionar ao Carrinho</button>
                <button class="btn btn-link" onclick="toggleDescricao(this)">Ver Descrição</button>
            `;
            produtosDiv.appendChild(produtoDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar produtos:', error));

function toggleDescricao(button) {
    const produtoDiv = button.parentNode.querySelector('.imagem-descricao');
    const imagem = produtoDiv.querySelector('.imagem-produto');
    const descricao = produtoDiv.querySelector('.descricao');

    if (descricao.style.display === 'none' || descricao.style.display === '') {
        imagem.style.display = 'none';
        descricao.style.display = 'block';
        button.innerText = 'Esconder Descrição';
    } else {
        imagem.style.display = 'block';
        descricao.style.display = 'none';
        button.innerText = 'Ver Descrição';
    }
}

// Carrega o carrinho ao inicializar a página
atualizarCarrinho();
