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

document.addEventListener("DOMContentLoaded", updateCartCount);