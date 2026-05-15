// ===============================
// Update Cart Count Function
// ===============================

// This function calculates the total quantity
// of all items inside the cart and displays it
// in the cart counter icon.
function updateCartCount() {

  // Get cart data from localStorage
  const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

  // Variable to store total quantity
  let total = 0;

  // Loop through cart items and add their quantities to total
  cart.forEach(item => {total += item.quantity;});

  // Get cart counter element
  const cartCount =document.getElementById("cart-count");

  // Update cart counter if element exists
  if (cartCount) {
    cartCount.textContent = total;
  }
}

// Run the function after the page loads
document.addEventListener("DOMContentLoaded",updateCartCount);