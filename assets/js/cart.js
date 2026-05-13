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

    if (cart.length === 0) {
    document.getElementById('subtotal-val').innerText = `0.00 SAR`;

    const shippingDisplay = document.querySelector('.summary-row:nth-child(2) span:last-child');
    if (shippingDisplay) {
        shippingDisplay.innerText = `0.00 SAR`;
    }

    document.getElementById('total-val').innerText = `0.00 SAR`;
    return;
    }

    cart.forEach(item => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        subtotal += price * item.quantity;
    });

    document.getElementById('subtotal-val').innerText = `${subtotal.toFixed(2)} SAR`;

    const shippingDisplay = document.querySelector('.summary-row:nth-child(2) span:last-child');
    if (shippingDisplay) shippingDisplay.innerText = `${shippingCost.toFixed(2)} SAR`;

    const total = subtotal + shippingCost;
    document.getElementById('total-val').innerText = `${total.toFixed(2)} SAR`;
}

window.updateQty = function(index, change) {
    let cart = JSON.parse(localStorage.getItem("nama_cart"));
    cart[index].quantity += change;
    
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    
    if (cart[index].category === "Gift" && cart[index].quantity > 2) cart[index].quantity = 2;

    localStorage.setItem("nama_cart", JSON.stringify(cart));
    renderCartItems();
    updateCartTotals();
    updateCartCount();
};

window.removeItem = function(index) {
    let cart = JSON.parse(localStorage.getItem("nama_cart"));
    cart.splice(index, 1);
    localStorage.setItem("nama_cart", JSON.stringify(cart));
    renderCartItems();
    updateCartTotals();
    updateCartCount();
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("combinedCheckoutForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

      if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      const fullName = document.getElementById("fullName").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const city = document.getElementById("city").value;
      const address = document.getElementById("address").value.trim();
      const payment = document.querySelector('input[name="payment"]:checked').value;

      if (fullName === "" || phone === "" || address === "") {
        alert("Please fill in all shipping information.");
        return;
      }

      const phonePattern = /^05[0-9]{8}$/;
      if (!phonePattern.test(phone)) {
        alert("Please enter a valid Saudi phone number starting with 05.");
        return;
      }

      const addons = Array.from(document.querySelectorAll('input[name="addon"]:checked')).map(
        item => item.value
      );

      const note = document.getElementById("customNote").value.trim();

      fetch("../backend/processCheckout.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cart: cart,
          customer: {
            fullName: fullName,
            phone: phone,
            city: city,
            address: address,
            payment: payment
          },
          customization: {
            addons: addons,
            note: note
          }
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            localStorage.removeItem("nama_cart");
            updateCartCount();
            window.location.href = "thank-you.html";
          } else {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error("Checkout error:", error);
          alert("Something went wrong during checkout.");
        });
    });
  }
});

document.addEventListener('DOMContentLoaded', renderCartItems);

function clearCart() {
    localStorage.removeItem("nama_cart");
    renderCartItems();
    updateCartCount();
    updateCartTotals();
}

renderCartItems();
updateCartCount();
updateCartTotals();
function updateCartCount() {

  const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

  let total = 0;

  cart.forEach(item => {
    total += item.quantity;
  });

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = total;
  }
}