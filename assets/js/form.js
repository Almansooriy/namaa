// Get mode from URL
const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");

// Elements
const title = document.getElementById("title");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const form = document.getElementById("productForm");

// Inputs
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

// --------------------
// Handle page mode (add / edit / delete)
// --------------------

if (mode === "add") {
  if (title) title.textContent = "Add Product";
}

if (mode === "edit") {
  if (title) title.textContent = "Edit Product";
}

if (mode === "delete") {
  if (title) title.textContent = "Delete Product (Are you sure?)";

  // Disable all inputs in delete mode
  document.querySelectorAll("input, textarea, select").forEach(el => {
    el.disabled = true;
  });

  // Hide save button in delete mode
  if (saveBtn) saveBtn.style.display = "none";
}

// --------------------
// Image preview handling
// --------------------

if (imageInput && preview) {
  // Set initial image (from database if available)
  preview.src = imageInput.value || "";

  // Update preview when user changes image URL
  imageInput.addEventListener("input", function () {
    preview.src = this.value;
  });
}

// --------------------
// Form validation before submit
// --------------------

if (form) {
  form.addEventListener("submit", function (e) {

    const price = parseFloat(priceInput.value);
    const stock = parseInt(stockInput.value);

    // Validate negative values
    if (price < 0 || stock < 0) {
      alert("Price and Stock cannot be negative!");
      e.preventDefault();
      return;
    }

    // Validate max limits
    if (price > 10000) {
      alert("Price is too high!");
      e.preventDefault();
      return;
    }

    if (stock > 1000) {
      alert("Stock is too high!");
      e.preventDefault();
      return;
    }

    // Do NOT use preventDefault here if valid
    // Let the form submit to PHP normally
  });
}