const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");

const title = document.getElementById("title");
const saveBtn = document.getElementById("saveBtn");
const form = document.getElementById("productForm");

const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

if (mode === "add") {
  if (title) title.textContent = "Add Product";
}

if (mode === "edit") {
  if (title) title.textContent = "Edit Product";
}

if (mode === "delete") {
  if (title) title.textContent = "Delete Product (Are you sure?)";

  // Disable only visible fields, NOT hidden inputs
  document.querySelectorAll("input:not([type='hidden']), textarea, select").forEach(el => {
    el.disabled = true;
  });

  if (saveBtn) saveBtn.style.display = "none";
}

if (imageInput && preview) {
  preview.src = imageInput.value || "";

  imageInput.addEventListener("input", function () {
    preview.src = this.value;
    preview.style.display = this.value ? "block" : "none";
  });
}

if (form) {
  form.addEventListener("submit", function (e) {

    // Delete does not need validation
    if (mode === "delete") {
      return;
    }

    const price = parseFloat(priceInput.value);
    const stock = parseInt(stockInput.value);

    if (price < 0 || stock < 0) {
      alert("Price and Stock cannot be negative!");
      e.preventDefault();
      return;
    }

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
  });
}