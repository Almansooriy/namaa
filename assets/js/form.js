// ===============================
// Get URL Parameters
// ===============================

// Get current page URL parameters
const params = new URLSearchParams(window.location.search);

// Get form mode (add / edit / delete)
const mode = params.get("mode");

// ===============================
// Get HTML Elements
// ===============================

// Page title element
const title = document.getElementById("title");

// Save button element
const saveBtn = document.getElementById("saveBtn");

// Product form element
const form = document.getElementById("productForm");

// Price input field
const priceInput = document.getElementById("price");

// Stock input field
const stockInput = document.getElementById("stock");

// Image input field
const imageInput = document.getElementById("imageInput");

// Image preview element
const preview = document.getElementById("preview");

// ===============================
// Change Page Title Based on Mode
// ===============================

// Add mode
if (mode === "add") {
  if (title) {
    title.textContent = "Add Product";
  }
}

// Edit mode
if (mode === "edit") {
  if (title) {
    title.textContent = "Edit Product";
  }
}

// Delete mode
if (mode === "delete") {
  // Update title
  if (title) {
    title.textContent = "Delete Product (Are you sure?)";
  }

  // Disable visible form fields
  // Hidden inputs stay enabled
  document.querySelectorAll("input:not([type='hidden']), textarea, select").forEach(el => {el.disabled = true;});

  // Hide save button
  if (saveBtn) {
    saveBtn.style.display = "none";
  }
}

// ===============================
// Image Preview
// ===============================

// Check if image input and preview exist
if (imageInput && preview) {
  imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });
}

// ===============================
// Form Validation
// ===============================

// Check if form exists
if (form) {

  // Form submit event
  form.addEventListener("submit",function (e) {

    // Skip validation in delete mode
    if (mode === "delete") {return;}

    // Convert price to decimal number
    const price = parseFloat(priceInput.value);

    // Convert stock to integer
    const stock = parseInt(stockInput.value);

    // Prevent negative values
    if (price < 0 || stock < 0) {
      alert("Price and Stock cannot be negative!");
      e.preventDefault();
      return;
    }

    // Prevent very high prices
    if (price > 10000) {
      alert("Price is too high!");
      e.preventDefault();
      return;
    }

    // Prevent very high stock values
    if (stock > 1000) {
      alert("Stock is too high!");
      e.preventDefault();
      return;
      }
    }
  );
}