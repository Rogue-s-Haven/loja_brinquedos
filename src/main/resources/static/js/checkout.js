// checkout.js
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
}

function atualizarCheckout() {
    const carrinho = carregarCarrinho();
    const checkoutItensDiv = document.getElementById('checkout-itens');
    checkoutItensDiv.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');
        itemDiv.innerHTML = `
            <p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>
        `;
        checkoutItensDiv.appendChild(itemDiv);
        total += item.preco;
    });

    document.getElementById('checkout-total').innerText = total.toFixed(2);
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho'); // Limpa o carrinho ao finalizar a compra
    window.location.href = '/';
}

// Atualiza a página de checkout ao carregar
document.addEventListener('DOMContentLoaded', atualizarCheckout);
