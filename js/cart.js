document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cart);

    document.getElementById('clear-cart').addEventListener('click', function() {
        localStorage.removeItem('cart');
        updateCartDisplay([]);
    });

    document.getElementById('complete-order').addEventListener('click', function() {
        alert('Siparişiniz tamamlandı!');
        // Siparişi tamamlamak için gerekli işlemleri burada yapabilirsiniz
    });
});

function updateCartDisplay(cart) {
    const cartElement = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.className = "list-group-item";
        emptyMessage.textContent = "Sepetiniz boş.";
        cartElement.appendChild(emptyMessage);
    } else {
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";
            listItem.innerHTML = `
                <div>
                    <span>${item.name}</span><br>
                    <small>${item.price} TL - ${item.quantity} adet</small>
                </div>
                <span>${item.price * item.quantity} TL</span>
            `;
            cartElement.appendChild(listItem);
            totalPrice += item.price * item.quantity;
        });
    }

    totalPriceElement.textContent = `Toplam Tutar: ${totalPrice} TL`;
}
