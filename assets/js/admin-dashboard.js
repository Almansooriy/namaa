function searchProduct(mode) {
  const name = document.querySelector(".admin-search-form input").value.trim();

  if (!name) {
    alert("Please enter a product name.");
    return;
  }

  window.location.href =
    "form.php?mode=" + mode + "&search=" + encodeURIComponent(name);
}