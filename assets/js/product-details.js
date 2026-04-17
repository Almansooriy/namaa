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
  },

  "lavender-harmony-bouquet": {
    name: "Lavender Harmony Bouquet",
    category: "Flowers • Bouquets",
    price: "158 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_5556_1_1_.jpg",
    description: "A soothing mix of soft purple and white flowers."
  },

  "pink-cloud-bouquet": {
    name: "Pink Cloud Bouquet",
    category: "Flowers • Bouquets",
    price: "227 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4710_1_.jpg",
    description: "Light and airy pink blooms."
  },

  "fresh-garden-bouquet": {
    name: "Fresh Garden Bouquet",
    category: "Flowers • Bouquets",
    price: "197 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4674_1_.jpg",
    description: "Fresh greenery with bright tones."
  },

  "rustic-flame-bouquet": {
    name: "Rustic Flame Bouquet",
    category: "Flowers • Bouquets",
    price: "317 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_0398_1_.jpg",
    description: "Bold red and orange tones."
  },

  "sky-breeze-bouquet": {
    name: "Sky Breeze Bouquet",
    category: "Flowers • Bouquets",
    price: "280 SAR",
    image: "https://cdn.naseemsa.com/cache/436/0/naseem/catalog/product/d/s/dsc_1368_1_.jpg",
    description: "Blue and white flowers inspired by the sky."
  },

  // ARRANGEMENTS
  "sunlight-harmony-arrangement": {
    name: "Sunlight Harmony Arrangement",
    category: "Flowers • Arrangements",
    price: "248 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4667_1_.jpg",
    description: "Bright yellow and white blooms."
  },

  "golden-autumn-luxe-arrangement": {
    name: "Golden Autumn Luxe Arrangement",
    category: "Flowers • Arrangements",
    price: "599 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2120_1_.jpg",
    description: "Luxury autumn style arrangement."
  },

  "pure-elegance-arrangement": {
    name: "Pure Elegance Arrangement",
    category: "Flowers • Arrangements",
    price: "525 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/9/4/94b6248a-5a91-4691-9966-3f8af47d5e0f.jpg",
    description: "Soft white elegant arrangement."
  },

  "blush-sky-arrangement": {
    name: "Blush Sky Arrangement",
    category: "Flowers • Arrangements",
    price: "349 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_9493_1_1_.jpg",
    description: "Pink and blue calm mix."
  },

  // PLANTS
  "red-anthurium-elegance-plant": {
    name: "Red Anthurium Elegance Plant",
    category: "Indoor Plants",
    price: "229 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/7/8/7847561f-8935-4e91-a862-1d21ba1dc387_1_.jpeg",
    description: "Bold red plant."
  },

  "peace-lily-serenity-plant": {
    name: "Peace Lily Serenity Plant",
    category: "Indoor Plants",
    price: "149 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/0/8/081f611e-dceb-4338-b8f9-ec5b1fbbbd95_1_.jpeg",
    description: "Calming white blooms."
  },

  // PACKAGES
  "crimson-luxe-box-arrangement": {
    name: "Crimson Luxe Box Arrangement",
    category: "Gift Packages",
    price: "310 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_6260.jpg",
    description: "Luxury red gift box."
  },

  "golden-bloom-coffee-luxe-arrangement": {
    name: "Golden Bloom & Coffee Luxe Arrangement",
    category: "Gift Packages",
    price: "565 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2640_1_1_.jpg",
    description: "Flowers with coffee."
  },

  "blush-treat-gift-box": {
    name: "Blush Treat Gift Box",
    category: "Gift Packages",
    price: "198 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4763_1_.jpg",
    description: "Flowers with chocolate."
  }
};

// -------------------------------
// 2. Get Product ID
// -------------------------------
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// -------------------------------
// 3. Load Product
// -------------------------------
document.addEventListener("DOMContentLoaded", function () {

  const product = products[productId];

  if (!product) {
    document.getElementById("productName").textContent = "Product not found";
    return;
  }

  document.getElementById("productName").textContent = product.name;
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productPrice").textContent = product.price;
  document.getElementById("productDescription").textContent = product.description;
  document.getElementById("productImage").src = product.image;
  renderSuggestions();
});

// -------------------------------
// 4. Quantity
// -------------------------------
function changeMainQty(value) {
  const el = document.getElementById("mainQty");
  let qty = parseInt(el.textContent) + value;
  if (qty < 1) qty = 1;
  el.textContent = qty;
}

// -------------------------------
// 5. Add to Cart
// -------------------------------
function handleAddToCart() {
  const qty = parseInt(document.getElementById("mainQty").textContent);
  const product = products[productId];

  let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

  const index = cart.findIndex(item => item.id === productId);

  if (index > -1) {
    cart[index].quantity += qty;
  } else {
    cart.push({
      ...product,
      id: productId,
      quantity: qty
    });
  }

  localStorage.setItem("nama_cart", JSON.stringify(cart));

  alert(product.name + " added to cart");
}

function handleBuyNow() {
  handleAddToCart();
  window.location.href = "cart.html";
}

// -------------------------------
// 6. Suggestions (Chocolate & Coffee)
// -------------------------------
function renderSuggestions() {
  const container = document.getElementById("suggestionsContainer");
  if (!container) return;

  const suggestions = [
    { name: "Chocolate Box", price: "50 SAR", image: "../assets/images/chocolate 1.jpg" },
    { name: "Premium Chocolate", price: "65 SAR", image: "../assets/images/chocolate 2.jpg" },
    { name: "Luxury Chocolate", price: "80 SAR", image: "../assets/images/chocolate 3.jpg" },
    { name: "Coffee Set", price: "40 SAR", image: "../assets/images/coffee 1.jpg" },
    { name: "Arabian Coffee", price: "55 SAR", image: "../assets/images/coffee 2.jpg" },
    { name: "Special Coffee", price: "70 SAR", image: "../assets/images/coffee3.jpg" }
  ];

  container.innerHTML = suggestions.map(item => `
    <div class="suggestion-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button onclick="addSuggestionToCart('${item.name}', '${item.price}', '${item.image}')" class="btn-suggestion">
        Add to Cart
      </button>
    </div>
  `).join('');
}

function addSuggestionToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

  const index = cart.findIndex(item => item.name === name);

  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      id: name.toLowerCase().replace(/\s/g, "-"),
      name,
      price,
      image,
      quantity: 1,
      category: "Addon"
    });
  }

  localStorage.setItem("nama_cart", JSON.stringify(cart));
  alert(name + " added to cart");
}