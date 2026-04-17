// ===============================
// Product Details Page Script
// ===============================

// -------------------------------
// 1. Product Data (Static Database)
// -------------------------------
const products = {
  "white-harmony-bouquet": {
    name: "White Harmony Bouquet",
    category: "Flowers • Bouquets",
    price: "95 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1838.jpg",
    description: "A soft blend of white blooms creating a calm and elegant look."
  },
  "blush-bloom-bouquet": {
    name: "Blush Bloom Bouquet",
    category: "Flowers • Bouquets",
    price: "155 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_5567_1_.jpg",
    description: "Delicate pink tones arranged in a romantic and graceful style."
  },
  "autumn-glow-bouquet": {
    name: "Autumn Glow Bouquet",
    category: "Flowers • Bouquets",
    price: "245 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2552_1_.jpg",
    description: "Warm seasonal flowers with rich tones inspired by autumn."
  }
  //(can keep the rest of your products here as is)
};

// -------------------------------
// 2. Get Product ID from URL
// Example: product-details.html?id=white-harmony-bouquet
// -------------------------------
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Get the selected product from the object
const currentProduct = products[productId];

// -------------------------------
// 3. Display Product Data
// -------------------------------
document.addEventListener("DOMContentLoaded", function () {

  // Debugging (Check in console)
  console.log("Product ID:", productId);
  console.log("Product Data:", currentProduct);

  // If product not found
  if (!currentProduct) {
    document.getElementById("productName").textContent = "Product not found";
    return;
  }

  // Fill HTML elements with product data
  document.getElementById("productName").textContent = currentProduct.name;
  document.getElementById("productCategory").textContent = currentProduct.category;
  document.getElementById("productPrice").textContent = currentProduct.price;
  document.getElementById("productDescription").textContent = currentProduct.description;
  document.getElementById("productImage").src = currentProduct.image;
});

// -------------------------------
// 4. Quantity Logic (Main Product)
// -------------------------------
function changeMainQty(value) {
  const qtyEl = document.getElementById("mainQty");
  let qty = parseInt(qtyEl.textContent) + value;

  if (qty < 1) qty = 1;

  qtyEl.textContent = qty;
}

// -------------------------------
// 5. Add Main Product to Cart
// -------------------------------
function handleAddToCart() {
  const qty = parseInt(document.getElementById("mainQty").textContent);

  if (currentProduct) {
    let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

    // Check if product already exists in cart
    const index = cart.findIndex(item => item.id === productId);

    if (index > -1) {
      cart[index].quantity += qty;
    } else {
      cart.push({
        ...currentProduct,
        id: productId,
        quantity: qty
      });
    }

    localStorage.setItem("nama_cart", JSON.stringify(cart));

    alert(currentProduct.name + " added to your cart!");
  }
}

// -------------------------------
// 6. Suggestions Data
// -------------------------------
const suggestions = [
  { id: "golden-chocolate-tray", name: "Golden Chocolate Tray", price: "185 SAR", image: "../assets/images/chocolate 1.jpg" },
  { id: "rose-chocolate-box", name: "Rose Chocolate Box", price: "210 SAR", image: "../assets/images/chocolate 2.jpg" }
];

// -------------------------------
// 7. Change Quantity for Suggestions
// -------------------------------
function changeQty(id, value) {
  const qtyEl = document.getElementById("qty-" + id);
  let qty = parseInt(qtyEl.textContent) + value;

  if (qty < 1) qty = 1;
  if (qty > 2) qty = 2;

  qtyEl.textContent = qty;
}

// -------------------------------
// 8. Add Suggestion to Cart
// -------------------------------
function addToCart(id) {
  const item = suggestions.find(s => s.id === id);
  const qty = parseInt(document.getElementById("qty-" + id).textContent);

  if (item) {
    let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

    const index = cart.findIndex(s => s.id === id);

    if (index > -1) {
      cart[index].quantity += qty;
    } else {
      cart.push({
        ...item,
        quantity: qty,
        category: "Gift"
      });
    }

    localStorage.setItem("nama_cart", JSON.stringify(cart));

    alert(item.name + " added to your cart!");
  }
}

// -------------------------------
// 9. Render Suggestions
// -------------------------------
function renderSuggestions() {
  const container = document.getElementById("suggestionsContainer");

  if (!container) return;

  container.innerHTML = suggestions.map(item => `
    <div class="suggestion-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <p style="font-size: 0.8rem; color: #888;">(max 2)</p>

      <div class="qty-box">
        <button onclick="changeQty('${item.id}', -1)">-</button>
        <span id="qty-${item.id}">1</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>

      <button class="btn-suggestion" onclick="addToCart('${item.id}')">
        Add to Cart
      </button>
    </div>
  `).join('');
}

// Run suggestions rendering
renderSuggestions();