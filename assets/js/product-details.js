// ===============================
// Product Details Page Script
// ===============================

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let currentProduct = null;
let mainQty = 1;

document.addEventListener("DOMContentLoaded", function () {
  console.log("Product ID:", productId);

  if (!productId) {
    document.getElementById("productName").textContent = "No product ID!";
    return;
  }

  fetch(`/namaa/backend/getOneProduct.php?id=${productId}`)
    .then(response => {
      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      return response.json();
    })
    .then(product => {
      console.log("Product Data:", product);

      if (!product || product.error) {
        document.getElementById("productName").textContent = "Product not found";
        return;
      }

      currentProduct = product;

      document.getElementById("productName").textContent =
        product.product_name || product.name || "No Name";

      let categoryName = "Unknown";

      if (product.category_id == 1) {
        categoryName = "Plants";
      } else if (product.category_id == 2) {
        categoryName = "Flowers";
      } else if (product.category_id == 3) {
        categoryName = "Gift Packages";
      }

      document.getElementById("productCategory").textContent =
        "Category: " + categoryName;

      document.getElementById("productPrice").textContent =
        (product.price || "0") + " SAR";

      document.getElementById("productDescription").textContent =
        product.description || "No description";

      let imagePath = product.image || "";

      if (imagePath && !imagePath.startsWith("http")) {
        imagePath = "../assets/images/" + imagePath;
      }

      document.getElementById("productImage").src = imagePath;
      document.getElementById("productImage").alt =
        product.product_name || product.name || "Product image";

      if (typeof renderSuggestions === "function") {
        renderSuggestions();
      }
    })
    .catch(error => {
      console.error("FETCH ERROR:", error);
      document.getElementById("productName").textContent = "Error loading product";
    });
});

function changeMainQty(change) {
  mainQty += change;

  if (mainQty < 1) {
    mainQty = 1;
  }

  document.getElementById("mainQty").textContent = mainQty;
}

function handleAddToCart() {
  if (!currentProduct) {
    alert("Product is not loaded yet.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("nama_cart")) || [];

  const existingProduct = cart.find(item => item.id == currentProduct.product_id);

  if (existingProduct) {
    existingProduct.quantity += mainQty;
  } else {
    cart.push({
      id: currentProduct.product_id,
      name: currentProduct.name,
      price: currentProduct.price + " SAR",
      image: currentProduct.image,
      category: currentProduct.category_id,
      quantity: mainQty
    });
  }

  localStorage.setItem("nama_cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart.");
}

function handleBuyNow() {
  handleAddToCart();
  window.location.href = "cart.html";
}
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