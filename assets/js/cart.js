function renderCartItems() {
    const cartContainer = document.getElementById('cartItemsList');
    const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];
    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='text-align:center; padding:20px;'>Your bag is empty.</p>";
        updateCartTotals();
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="item-info">
                    <span class="item-category">${item.category || 'Gift'}</span>
                    <h3>${item.name}</h3>
                    <p class="item-price">${item.price}</p>
                </div>
                <div class="item-management">
                    <div class="qty-box">
                        <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                    </div>
                    <button class="remove-link" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    updateCartTotals();
}

function updateCartTotals() {
    const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];
    let subtotal = 0;
    const shippingCost = 30; 

    cart.forEach(item => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        subtotal += price * item.quantity;
    });

    document.getElementById('subtotal-val').innerText = `${subtotal.toFixed(2)} SAR`;
    
    const shippingDisplay = document.querySelector('.summary-row:nth-child(2) span:last-child');
    if (shippingDisplay) shippingDisplay.innerText = `${shippingCost.toFixed(2)} SAR`;

    const total = subtotal > 0 ? subtotal + shippingCost : 0;
    document.getElementById('total-val').innerText = `${total.toFixed(2)} SAR`;
}

window.updateQty = function(index, change) {
    let cart = JSON.parse(localStorage.getItem("nama_cart"));
    cart[index].quantity += change;
    
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    
    if (cart[index].category === "Gift" && cart[index].quantity > 2) cart[index].quantity = 2;

    localStorage.setItem("nama_cart", JSON.stringify(cart));
    renderCartItems();
};

window.removeItem = function(index) {
    let cart = JSON.parse(localStorage.getItem("nama_cart"));
    cart.splice(index, 1);
    localStorage.setItem("nama_cart", JSON.stringify(cart));
    renderCartItems();
};

document.getElementById('combinedCheckoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.removeItem("nama_cart");
    window.location.href = "thank-you.html";
});

document.addEventListener('DOMContentLoaded', renderCartItems);