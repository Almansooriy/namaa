// ===============================
// Product Details Page Script
// ===============================

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Store current product data
let currentProduct = null;

// Default quantity value
let mainQty = 1;

// ===============================
// Load Product Data
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  console.log("Product ID:", productId);

  // Check if product ID exists
  if (!productId) {
    document.getElementById("productName").textContent ="No product ID!";
    return;
  }

  // Fetch product details from PHP backend
  fetch(`/namaa/backend/productDetails.php?id=${productId}`)
    .then(response => {
      console.log("Response:", response);

      // Check if request failed
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })

    .then(product => {
      console.log("Product Data:", product);

      // Check if product exists
      if (!product || product.error) {
        document.getElementById("productName").textContent = "Product not found";
        return;
      }

      // Store product globally
      currentProduct = product;

      // Display product name
      document.getElementById("productName").textContent = product.product_name || product.name || "No Name";

      // Default category
      let categoryName = "Unknown";

      // Convert category ID to category name
      if (product.category_id == 1) {
        categoryName = "Plants";
      } else if (product.category_id == 2) {
        categoryName = "Flowers";
      } else if (product.category_id == 3) {
        categoryName = "Gift Packages";
      }

      // Display category
      document.getElementById("productCategory").textContent = "Category: " + categoryName;

      // Display price
      document.getElementById("productPrice").textContent = (product.price || "0") + " SAR";

      // Display description
      document.getElementById("productDescription").textContent = product.description || "No description";

      // Product image path
      let imagePath = product.image || "";

      // Add local folder path if image is not URL
      if (imagePath && !imagePath.startsWith("http")) {
        imagePath = "../assets/images/" + imagePath;
      }

      // Display product image
      document.getElementById("productImage").src = imagePath;

      // Add image alt text
      document.getElementById("productImage").alt = product.product_name || product.name || "Product image";
    })

    // Handle fetch errors
    .catch(error => {
      console.error("FETCH ERROR:", error);
      document.getElementById("productName").textContent = "Error loading product";
    });
});

// ===============================
// Change Product Quantity
// ===============================
function changeMainQty(change) {

  // Increase or decrease quantity
  mainQty += change;

  // Prevent quantity below 1
  if (mainQty < 1) {
    mainQty = 1;
  }

  // Update quantity on page
  document.getElementById("mainQty").textContent =
    mainQty;
}

// ===============================
// Add Main Product To Cart
// ===============================
function handleAddToCart() {

  // Check if product is loaded
  if (!currentProduct) {
    alert("Product is not loaded yet.");
    return;
  }

  // Get cart data from localStorage
  let cart =JSON.parse(localStorage.getItem("nama_cart")) || [];

  // Search for existing product in cart
  const existingProduct = cart.find(item => item.id == currentProduct.product_id);

  // Increase quantity if product already exists
  if (existingProduct) {
    existingProduct.quantity += mainQty;
  } else {

    // Add new product to cart
    cart.push({
      id: currentProduct.product_id,
      name: currentProduct.name,
      price: currentProduct.price + " SAR",
      image: currentProduct.image,
      category: currentProduct.category_id,
      quantity: mainQty
    });
  }

  // Save updated cart
  localStorage.setItem("nama_cart", JSON.stringify(cart));

  // Update cart counter
  updateCartCount();

  // Success message
  alert("Product added to cart.");
}

// ===============================
// Buy Now Function
// ===============================
function handleBuyNow() {

  // Add item to cart first
  handleAddToCart();

  // Redirect to cart page
  window.location.href = "cart.html";
}

// ===============================
// Update Cart Counter
// ===============================
function updateCartCount() {

  // Get cart data
  const cart = JSON.parse(localStorage.getItem("nama_cart")) || [];
  let total = 0;

  // Calculate total quantity
  cart.forEach(item => {total += item.quantity;});

  // Cart counter element
  const cartCount = document.getElementById("cart-count");

  // Update counter
  if (cartCount) {
    cartCount.textContent = total;
  }
}

// Update cart count when page loads
document.addEventListener("DOMContentLoaded", updateCartCount);

// ===============================
// Open Help Popup
// ===============================
function openHelpPopup() {
  const popup = document.getElementById("helpPopup");
  if (popup) {
    popup.style.display = "flex";
  }
}

// ===============================
// Close Help Popup
// ===============================
function closeHelpPopup() {
  const popup = document.getElementById("helpPopup");
  if (popup) {popup.style.display = "none";}
}

// ===============================
// Render Suggestions Section
// ===============================
function renderSuggestions() {

  // Suggestions container
  const suggestionsContainer = document.getElementById("suggestionsContainer");

  // Stop if container not found
  if (!suggestionsContainer) return;

  // Suggestions products array
  const suggestions = [
    {
      name: "Chocolate Box",
      image: "../assets/images/chocolate1.jpg"
    },

    {
      name: "Premium Chocolate",
      image: "../assets/images/chocolate2.jpg"
    },

    {
      name: "Luxury Chocolate",
      image: "../assets/images/chocolate3.jpg"
    },

    {
      name: "Sweet Chocolate",
      image: "../assets/images/chocolate4.jpg"
    },

    {
      name: "Special Chocolate",
      image: "../assets/images/chocolate5.jpg"
    },

    {
      name: "Coffee Pack",
      image: "../assets/images/coffee1.jpg"
    },

    {
      name: "Premium Coffee",
      image: "../assets/images/coffee2.jpg"
    },

    {
      name: "Arabic Coffee",
      image: "../assets/images/coffee3.jpg"
    }

  ];

  // Clear old suggestions
  suggestionsContainer.innerHTML = "";

  // Loop through suggestions
  suggestions.forEach(item => {suggestionsContainer.innerHTML += `
    <div class="suggestion-card">
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <button class="btn" onclick="addSuggestionToCart('${item.name}', '${item.image}')">Add to Cart</button>
    </div>`;
  });
}

// Render suggestions when page loads
document.addEventListener("DOMContentLoaded", () => {
  renderSuggestions();
});

// ===============================
// Add Suggestion Product To Cart
// ===============================
function addSuggestionToCart(name, image) {

  // Get cart from localStorage
  let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

  // Search for existing suggestion item
  const existingProduct = cart.find(item => item.name === name);

  // Increase quantity if item already exists
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {

    // Add new suggestion item
    cart.push({
      id: Date.now(),
      name: name,
      price: "25 SAR",
      image: image,
      category: "Suggestions",
      quantity: 1
    });
  }

  // Save updated cart
  localStorage.setItem("nama_cart", JSON.stringify(cart));

  // Update cart counter
  updateCartCount();

  // Success message
  alert(name + " added to cart");
}