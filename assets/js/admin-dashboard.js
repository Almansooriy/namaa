// ===============================
// Search Product Function
// ===============================

// This function searches for a product
// by its name and redirects the admin
// to the selected form mode page.
function searchProduct(mode) {

  // Get the entered product name
  const name = document.querySelector(".admin-search-form input").value.trim();

  // Check if the input is empty
  if (!name) {
    // Show warning message
    alert("Please enter a product name.");
    return;
  }

  // Redirect to form page with mode and search value
  window.location.href ="form.php?mode=" +mode +"&search=" +encodeURIComponent(name);
}