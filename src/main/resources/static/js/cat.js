// Função para criar uma linha na tabela
function criarLinhaTabela(produto) {
    const tabela = document.getElementById('produtos');
    const novaLinha = tabela.insertRow();
    const celulaNome = novaLinha.insertCell();
    const celulaDescricao = novaLinha.insertCell();
    const celulaPreco = novaLinha.insertCell();
    celulaNome.textContent = produto.nome;
    celulaDescricao.textContent = produto.descricao;
    celulaPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;
}

// Busca os produtos e preenche a tabela
fetch('/produtos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        return response.json();
    })
    .then(produtos => {
        const tabela = document.getElementById('produtos');
        if (!tabela) {
            console.error('Elemento com id "produtos" não encontrado');
            return;
        }
        if (produtos.length === 0) {
            const linhaVazia = tabela.insertRow();
            linhaVazia.insertCell().textContent = 'Nenhum produto encontrado.';
        } else {
            produtos.forEach(produto => criarLinhaTabela(produto));
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        const tabela = document.getElementById('produtos');
        tabela.innerHTML = '<tr><td colspan="3">Ocorreu um erro ao carregar os produtos.</td></tr>';
    });
