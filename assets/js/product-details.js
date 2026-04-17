// Product Data
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
    description: "A soothing mix of soft purple and white flowers for a refined feel."
  },
  "pink-cloud-bouquet": {
    name: "Pink Cloud Bouquet",
    category: "Flowers • Bouquets",
    price: "227 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4710_1_.jpg",
    description: "Light and airy pink blooms with a soft cloud-like appearance."
  },
  "fresh-garden-bouquet": {
    name: "Fresh Garden Bouquet",
    category: "Flowers • Bouquets",
    price: "197 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4674_1_.jpg",
    description: "A fresh arrangement inspired by natural greenery and bright tones."
  },
  "rustic-flame-bouquet": {
    name: "Rustic Flame Bouquet",
    category: "Flowers • Bouquets",
    price: "317 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_0398_1_.jpg",
    description: "Bold red and orange tones with a warm rustic charm."
  },
  "sky-breeze-bouquet": {
    name: "Sky Breeze Bouquet",
    category: "Flowers • Bouquets",
    price: "280 SAR",
    image: "https://cdn.naseemsa.com/cache/436/0/naseem/catalog/product/d/s/dsc_1368_1_.jpg",
    description: "A refreshing mix of blue and white blooms inspired by the sky."
  },

  "sunlight-harmony-arrangement": {
    name: "Sunlight Harmony Arrangement",
    category: "Flowers • Arrangements",
    price: "248 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4667_1_.jpg",
    description: "A bright blend of yellow and white blooms arranged to bring warmth and freshness."
  },
  "golden-autumn-luxe-arrangement": {
    name: "Golden Autumn Luxe Arrangement",
    category: "Flowers • Arrangements",
    price: "599 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2120_1_.jpg",
    description: "A rich mix of warm tones designed in a luxurious autumn-inspired style."
  },
  "pure-elegance-arrangement": {
    name: "Pure Elegance Arrangement",
    category: "Flowers • Arrangements",
    price: "525 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/9/4/94b6248a-5a91-4691-9966-3f8af47d5e0f.jpg",
    description: "A clean and sophisticated arrangement featuring soft white blooms."
  },
  "blush-sky-arrangement": {
    name: "Blush Sky Arrangement",
    category: "Flowers • Arrangements",
    price: "349 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_9493_1_1_.jpg",
    description: "A delicate mix of pink and blue tones creating a calm and airy feel."
  },

  "red-anthurium-elegance-plant": {
    name: "Red Anthurium Elegance Plant",
    category: "Indoor Plants",
    price: "229 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/7/8/7847561f-8935-4e91-a862-1d21ba1dc387_1_.jpeg",
    description: "A vibrant red plant that adds a bold and elegant touch to any space."
  },
  "peace-lily-serenity-plant": {
    name: "Peace Lily Serenity Plant",
    category: "Indoor Plants",
    price: "149 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/0/8/081f611e-dceb-4338-b8f9-ec5b1fbbbd95_1_.jpeg",
    description: "A calming plant with soft white blooms, perfect for a peaceful atmosphere."
  },
  "white-anthurium-serenity-plant": {
    name: "White Anthurium Serenity Plant",
    category: "Indoor Plants",
    price: "220 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1788_1_.jpg",
    description: "A clean and minimal white plant that brings elegance and simplicity."
  },
  "blue-orchid-elegance-plant": {
    name: "Blue Orchid Elegance Plant",
    category: "Indoor Plants",
    price: "265 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1841_1_.jpg",
    description: "A unique blue orchid that adds a luxurious and refined touch."
  },
  "white-orchid-elegance-plant": {
    name: "White Orchid Elegance Plant",
    category: "Indoor Plants",
    price: "230 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1796_1_.jpg",
    description: "An elegant white orchid that enhances modern and minimal interiors."
  },
  "red-anthurium-luxe-plant": {
    name: "Red Anthurium Luxe Plant",
    category: "Indoor Plants",
    price: "280 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1671_1_.jpg",
    description: "A premium red plant with a bold look, perfect for statement decor."
  },
  "peace-lily-warm-elegance-plant": {
    name: "Peace Lily Warm Elegance Plant",
    category: "Indoor Plants",
    price: "210 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1745_1_.jpg",
    description: "A warm-toned plant that combines natural beauty with cozy elegance."
  },
  "white-anthurium-luxe-plant": {
    name: "White Anthurium Luxe Plant",
    category: "Indoor Plants",
    price: "240 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1676_1_1_.jpg",
    description: "A luxurious white plant designed to elevate any interior space."
  },

  "crimson-luxe-box-arrangement": {
    name: "Crimson Luxe Box Arrangement",
    category: "Gift Packages",
    price: "310 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_6260.jpg",
    description: "A bold red arrangement presented in a luxurious box for a striking gift."
  },
  "golden-bloom-coffee-luxe-arrangement": {
    name: "Golden Bloom & Coffee Luxe Arrangement",
    category: "Gift Packages",
    price: "565 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2640_1_1_.jpg",
    description: "A premium floral arrangement paired with coffee for a warm and refined experience."
  },
  "blush-treat-gift-box": {
    name: "Blush Treat Gift Box",
    category: "Gift Packages",
    price: "198 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4763_1_.jpg",
    description: "A soft pink floral gift set complemented with sweet chocolate treats."
  }
};

const suggestions = [
  { id: "golden-chocolate-tray", name: "Golden Chocolate Tray", price: "185 SAR", image: "../assets/images/chocolate 1.jpg"},
  { id: "rose-chocolate-box", name: "Rose Chocolate Box", price: "210 SAR", image: "../assets/images/chocolate 2.jpg"},
  { id: "golden-bloom-chocolate", name: "Golden Bloom Chocolate", price: "135 SAR", image: "../assets/images/chocolate 3.jpg" },
  { id: "rose-truffle-box", name: "Rose & Truffle Box", price: "165 SAR", image: "../assets/images/chocolate 4.jpg" },
  { id: "celebration-chocolate-platter", name: "Celebration Platter", price: "195 SAR", image: "../assets/images/chocolate 5.jpg" },
  { id: "hada-coffee", name: "Hada Coffee – Saudi Arabia", price: "85 SAR", image: "../assets/images/coffee 1.jpg"},
  { id: "excelso-coffee", name: "Excelso Coffee – Colombia", price: "90 SAR", image: "../assets/images/coffee 2.jpg"},
  { id: "hambela-coffee", name: "Hambela Coffee – Ethiopia", price: "95 SAR", image: "../assets/images/coffee3.jpg"}
];

if (currentProduct) {
  document.getElementById("productName").textContent = currentProduct.name;
  document.getElementById("productCategory").textContent = currentProduct.category;
  document.getElementById("productPrice").textContent = currentProduct.price;
  document.getElementById("productDescription").textContent = currentProduct.description;
  document.getElementById("productImage").src = currentProduct.image;
}

// Qty logic for Main Product
function changeMainQty(value) {
  const qtyEl = document.getElementById("mainQty");
  let qty = parseInt(qtyEl.textContent) + value;
  if (qty < 1) qty = 1;
  qtyEl.textContent = qty;
  
}

function handleAddToCart() {
  const qty = parseInt(document.getElementById("mainQty").textContent);
  if (currentProduct) {
    let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) { 
        cart[index].quantity += qty; 
    } else { 
        cart.push({ ...currentProduct, id: productId, quantity: qty }); 
    }
    localStorage.setItem("nama_cart", JSON.stringify(cart));
    alert(`${currentProduct.name} added to your bag!`);
  }
}

// Qty and Add logic for Suggestions
function changeQty(id, value) {
  const qtyEl = document.getElementById("qty-" + id);
  let qty = parseInt(qtyEl.textContent) + value;
  // Apply the max limit of 2 as requested in your HTML
  if (qty < 1) qty = 1;
  if (qty > 2) qty = 2; 
  qtyEl.textContent = qty;
}

function addToCart(id) {
  const item = suggestions.find(s => s.id === id);
  const qty = parseInt(document.getElementById("qty-" + id).textContent);
  if (item) {
    let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];
    const index = cart.findIndex(s => s.id === id);
    if (index > -1) { 
        cart[index].quantity += qty; 
    } else { 
        cart.push({ ...item, quantity: qty, category: "Gift" }); 
    }
    localStorage.setItem("nama_cart", JSON.stringify(cart));
    alert(`${item.name} added to your bag!`);
  }
}

function renderSuggestions() {
  const container = document.getElementById("suggestionsContainer");
  container.innerHTML = suggestions.map(item => `
    <div class="suggestion-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p id="price">${item.price}</p>
      <p style="font-size: 0.8rem; color: #888;">(max 2)</p>
      <div class="qty-box">
        <button onclick="changeQty('${item.id}', -1)">-</button>
        <span id="qty-${item.id}">1</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>
      <button class="btn-suggestion" onclick="addToCart('${item.id}')" style="margin-top:10px;">Add to Cart</button>
    </div>
  `).join('');
}

renderSuggestions();
