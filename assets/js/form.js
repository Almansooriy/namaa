// Get mode from URL
const params = new URLSearchParams(window.location.search);
const mode = params.get("mode");

// Elements
const title = document.getElementById("title");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const form = document.getElementById("productForm");

// Hide buttons initially
if (saveBtn) saveBtn.style.display = "none";
if (deleteBtn) deleteBtn.style.display = "none";

// Modes
if (mode === "add") {
  if (title) title.textContent = "Add Product";
  if (saveBtn) saveBtn.style.display = "block";
}

if (mode === "edit") {
  if (title) title.textContent = "Edit Product";
  if (saveBtn) saveBtn.style.display = "block";

  // Demo data
  document.getElementById("name").value = "Rose Bouquet";
  document.getElementById("description").value = "Beautiful roses";
  document.getElementById("price").value = "120";
  document.getElementById("stock").value = "10";
  document.getElementById("imageInput").value =
    "https://www.fnp.sa/cdn/shop/files/Red_Rose_Flower_Bouquet_Fresh_Flower_Delivery_in_Saudi_Arabia_1.jpg";

  document.getElementById("preview").src =
    document.getElementById("imageInput").value;
}

if (mode === "delete") {
  if (title) title.textContent = "Delete Product";
  if (deleteBtn) deleteBtn.style.display = "block";

  // Demo data
  document.getElementById("name").value = "Rose Bouquet";
  document.getElementById("description").value = "Beautiful roses";
  document.getElementById("price").value = "120";
  document.getElementById("stock").value = "10";
  document.getElementById("imageInput").value =
    "https://www.fnp.sa/cdn/shop/files/Red_Rose_Flower_Bouquet_Fresh_Flower_Delivery_in_Saudi_Arabia_1.jpg";

  document.getElementById("preview").src =
    document.getElementById("imageInput").value;

  // Disable inputs
  document.querySelectorAll("input, textarea, select").forEach(el => {
    el.disabled = true;
  });
}

// Save (Add & Edit)
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (mode === "add") {
      alert("Product added successfully!");
    }

    if (mode === "edit") {
      alert("Product updated successfully!");
    }

    window.location.href = "admin-dashboard.html";
  });
}

// Delete
if (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    alert("Product deleted successfully!");
    window.location.href = "admin-dashboard.html";
  });
}

// Image preview
const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");

if (input && preview) {
  input.addEventListener("input", function () {
    preview.src = input.value;
  });
}