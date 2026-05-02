// ===============================
// Product Details Page Script
// ===============================

// 1. Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let currentProduct = null;

document.addEventListener("DOMContentLoaded", function () {

  console.log("Product ID:", productId);

  // 2. Check if ID exists
  if (!productId) {
    document.getElementById("productName").textContent = "No product ID!";
    return;
  }

  // 3. Fetch product from backend (PHP API)
  fetch(`http://localhost:81/Namaa/backend/getOneProduct.php?id=${productId}`)
    .then(response => {

      console.log("Response:", response);

      // Check if response is OK
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }

      // Convert response to JSON
      return response.json();
    })
    .then(product => {

      console.log("Product Data:", product);

      // 4. Check if product exists
      if (!product || product.error) {
        document.getElementById("productName").textContent = "Product not found";
        return;
      }

      // Save product globally if needed
      currentProduct = product;

      // 5. Fill product data in HTML

      // Product name (supports different DB column names)
      document.getElementById("productName").textContent =
        product.product_name || product.name || "No Name";

      // Category
      document.getElementById("productCategory").textContent =
        "Category: " + (product.category_id || "-");

      // Price
      document.getElementById("productPrice").textContent =
        (product.price || "0") + " SAR";

      // Description
      document.getElementById("productDescription").textContent =
        product.description || "No description";

      // 6. Handle image path
      let imagePath = product.image || "";

      // If image is not a full URL, use local path
      if (imagePath && !imagePath.startsWith("http")) {
        imagePath = "../assets/images/" + imagePath;
      }

      // Set image source
      document.getElementById("productImage").src = imagePath;

      // 7. Optional: load suggestions
      if (typeof renderSuggestions === "function") {
        renderSuggestions();
      }

    })
    .catch(error => {

      console.error("FETCH ERROR:", error);

      // Show error message to user
      document.getElementById("productName").textContent = "Error loading product";
    });

});