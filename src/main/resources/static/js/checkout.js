function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
}

function atualizarCheckout() {
    const carrinho = carregarCarrinho();
    const checkoutItensDiv = document.getElementById('checkout-itens');
    checkoutItensDiv.innerHTML = '';

    let total = 0;

    if (carrinho.length === 0) {
        checkoutItensDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('carrinho-item', 'd-flex', 'justify-content-between', 'align-items-center', 'border-bottom', 'py-2');
            itemDiv.innerHTML = `
                <span>${item.nome}</span>
                <span>R$ ${item.preco.toFixed(2)}</span>
            `;
            checkoutItensDiv.appendChild(itemDiv);
            total += item.preco;
        });
    }

    document.getElementById('checkout-total').innerText = total.toFixed(2);
}

function finalizarCompra() {
    const carrinho = carregarCarrinho();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);

    const compra = {
        produtos: carrinho,
        valorTotal: total
    };

    fetch('/api/compras', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(compra)
    })
    .then(response => {
        if (response.ok) {
            alert('Compra finalizada com sucesso!');
            localStorage.removeItem('carrinho'); // Limpa o carrinho ao finalizar a compra
            window.location.href = 'index.html';
        } else {
            return response.json().then(data => {
                throw new Error(data.message || 'Erro ao finalizar a compra. Tente novamente.');
            });
        }
    })
    .catch(error => {
        console.error('Erro ao finalizar a compra:', error);
        alert(error.message);
    });
}

// Atualiza a página de checkout ao carregar
document.addEventListener('DOMContentLoaded', atualizarCheckout);
