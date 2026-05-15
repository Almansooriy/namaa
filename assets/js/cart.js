// ===============================
// Render Cart Items
// ===============================

function renderCartItems() {

    // Get cart container element
    const cartContainer = document.getElementById('cartItemsList');

    // Get cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

    // Check if cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p style='text-align:center; padding:20px;'>Your bag is empty.</p>";

        // Update totals
        updateCartTotals();
        return;
    }

    // Generate cart items HTML
    cartContainer.innerHTML = cart.map((item, index) => {
        // Get image path
        let imagePath = item.image;

        // Add local folder path if needed
        if (imagePath && !imagePath.startsWith('../')) {
            imagePath = '../assets/images/' + imagePath;
        }

        // Return item card
        return `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${imagePath}" alt="${item.name}" onerror="this.src='../assets/images/logo2.png'">
                </div>
                <div class="cart-item-details">
                    <div class="item-info">
                        <span class="item-category"></span>
                        <h3>${item.name}</h3>
                        <p class="item-price">${item.price}</p>
                    </div>
                    <div class="item-management">
                        <div class="qty-box">
                            <button class="qty-btn" onclick="updateQty(${index}, -1)"> - </button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQty(${index}, 1)"> + </button>
                        </div>
                        <button class="remove-link" onclick="removeItem(${index})"> Remove </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Update totals after rendering
    updateCartTotals();
}

// ===============================
// Update Cart Totals
// ===============================

function updateCartTotals() {

    // Get cart data
    const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

    // Default subtotal
    let subtotal = 0;

    // Shipping cost
    const shippingCost = 30;

    // Check if cart is empty
    if (cart.length === 0) {
        document.getElementById('subtotal-val').innerText =  `0.00 SAR`;

        // Shipping display element
        const shippingDisplay = document.querySelector('.summary-row:nth-child(2) span:last-child');
        // Reset shipping
        if (shippingDisplay) {
          shippingDisplay.innerText = `0.00 SAR`;
        }

        // Reset total
        document.getElementById('total-val').innerText = `0.00 SAR`;
        return;
    }

    // Calculate subtotal
    cart.forEach(item => {
        // Convert price string to number
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        subtotal += price * item.quantity;
    });

    // Display subtotal
    document.getElementById('subtotal-val').innerText = `${subtotal.toFixed(2)} SAR`;

    // Shipping display
    const shippingDisplay = document.querySelector('.summary-row:nth-child(2) span:last-child');

    // Display shipping cost
    if (shippingDisplay) {
        shippingDisplay.innerText = `${shippingCost.toFixed(2)} SAR`;    
    }

    // Calculate final total
    const total = subtotal + shippingCost;

    // Display total
    document.getElementById('total-val').innerText = `${total.toFixed(2)} SAR`;
}

// ===============================
// Update Product Quantity
// ===============================

window.updateQty = function(index, change) {

    // Get cart data
    let cart = JSON.parse(localStorage.getItem("nama_cart"));

    // Change quantity
    cart[index].quantity += change;

    // Prevent quantity below 1
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    // Special rule for gift products
    if (cart[index].category === "Gift" && cart[index].quantity > 2) {
        cart[index].quantity = 2;
    }

    // Save updated cart
    localStorage.setItem("nama_cart", JSON.stringify(cart));

    // Refresh cart display
    renderCartItems();

    // Update totals
    updateCartTotals();

    // Update cart counter
    updateCartCount();
};

// ===============================
// Remove Item From Cart
// ===============================

window.removeItem = function(index) {

    // Get cart data
    let cart = JSON.parse(localStorage.getItem("nama_cart"));

    // Remove selected item
    cart.splice(index, 1);

    // Save updated cart
    localStorage.setItem("nama_cart", JSON.stringify(cart));

    // Refresh cart
    renderCartItems();

    // Update totals
    updateCartTotals();

    // Update cart counter
    updateCartCount();
};

// ===============================
// Checkout Form Submission
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Get checkout form
    const form = document.getElementById("combinedCheckoutForm");  

    // Check if form exists
    if (form) {

        // Form submit event
        form.addEventListener("submit", function (e) {

            // Prevent page refresh
            e.preventDefault();

            // Get cart data
            const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

            // Check if cart is empty
            if (cart.length === 0) {
              alert("Your cart is empty.");
              return;
            }

            // Get customer data
            const fullName = document.getElementById("fullName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const city = document.getElementById("city").value;
            const address = document.getElementById("address").value.trim();
                
            // Get selected payment method
            const payment = document.querySelector('input[name="payment"]:checked').value;
                    
            // Validate shipping fields
            if (fullName === "" || phone === "" || address === ""){
              alert("Please fill in all shipping information.");
              return;
            }

            // Saudi phone validation
            const phonePattern = /^05[0-9]{8}$/;
                

            // Check phone number format
            if (!phonePattern.test(phone)) {
              alert("Please enter a valid Saudi phone number starting with 05.");
              return;         
            }

            // Get selected add-ons
            const addons = Array.from(document.querySelectorAll('input[name="addon"]:checked')).map(item => item.value);

            // Get customization note
            const note = document.getElementById("customNote").value.trim();

            // Send checkout data to backend
            fetch("../backend/processCheckout.php", {
              method: "POST", headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                cart: cart,
                customer: {fullName: fullName, phone: phone, city: city, address: address, payment: payment},
                customization: {addons: addons, note: note}
              })
            })

            // Convert response to JSON
            .then(response => response.json())

            // Handle backend response
            .then(data => {

                // Success
                if (data.success) {

                  // Clear cart
                  localStorage.removeItem("nama_cart");

                  // Update cart counter
                  updateCartCount();

                  // Redirect to thank you page
                  window.location.href ="thank-you.html";
                } else {
                    // Show backend error
                    alert(data.message);
                }
            })

            // Handle fetch errors
            .catch(error => {console.error("Checkout error:",error);
              alert("Something went wrong during checkout.");
            });
        });
    }
});

// ===============================
// Render Cart On Page Load
// ===============================

document.addEventListener('DOMContentLoaded', renderCartItems);

// ===============================
// Open Delete Modal
// ===============================

window.confirmClearCart = function() {
    document.getElementById('deleteModal').style.display = 'flex';
};

// ===============================
// Close Delete Modal
// ===============================

window.closeDeleteModal = function() {
    document.getElementById('deleteModal').style.display = 'none';
};

// ===============================
// Delete All Cart Items
// ===============================

window.executeDelete = function() {

    // Remove cart data
    localStorage.removeItem("nama_cart");

    // Refresh cart
    renderCartItems();

    // Update cart counter
    updateCartCount();

    // Update totals
    updateCartTotals();

    // Close modal
    closeDeleteModal();
};

// ===============================
// Update Cart Counter
// ===============================

function updateCartCount() {

    // Get cart data
    const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

    // Default counter value
    let total = 0;

    // Calculate total quantity
    cart.forEach(item => {
        total += item.quantity;
    });

    // Cart counter element
    const cartCount = document.getElementById("cart-count");

    // Display counter
    if (cartCount) {
        cartCount.textContent = total;
    }
}