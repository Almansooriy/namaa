// Live image preview
const input = document.getElementById("imageInput");
const preview = document.getElementById("preview");

if (input && preview) {
  input.addEventListener("input", function() {
    preview.src = input.value;
  });
}

// Open modal
function openModal() {
  const modal = document.getElementById("deleteModal");
  if (modal) modal.style.display = "flex";
}

// Close modal
function closeModal() {
  const modal = document.getElementById("deleteModal");
  if (modal) modal.style.display = "none";
}

// Confirm delete
function deleteProduct() {
  alert("Product deleted (demo)");
  closeModal();
}