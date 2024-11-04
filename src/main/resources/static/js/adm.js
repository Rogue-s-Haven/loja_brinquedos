document.getElementById('produtoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const produto = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        preco: parseFloat(document.getElementById('preco').value),
        imagemUrl: document.getElementById('imagemUrl').value
    };

    fetch('http://localhost:8080/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        // Limpa o formulário
        document.getElementById('produtoForm').reset();
        
        // Exibe o modal de sucesso
        $('#successModal').modal('show');
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao adicionar produto:', error);
        alert('Erro ao adicionar produto. Verifique o console para mais detalhes.');
    });
});