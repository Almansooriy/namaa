<?php
// Start session to protect admin dashboard access
session_start();
// Check if admin session exists
if(!isset($_SESSION['admin_id'])){
  // Redirect to login page if admin is not logged in
  header("Location: admin-login.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8" />
  <!-- Responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Page title -->
  <title>Namā | Admin Dashboard</title>
  <!-- Main CSS file -->
  <link rel="stylesheet" href="../../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../../assets/js/admin-dashboard.js" defer></script>
  <script src="../../assets/js/cart-count.js"  defer></script>
</head>
<body>
<!-- ================= HEADER ================= -->
<header class="navbar">
  <!-- Website Logo -->
  <div class="logo">
    <img src="../../assets/images/logo2.png" alt="Namā logo"><span>Namā</span>
  </div>
  <!-- Navigation Links -->
  <nav class="nav-links">
    <a href="../../home.php">Home</a>
    <a href="../products.php">Products</a>
    <a href="../../home.php#about">About</a>
    <a href="../contact.php">Contact</a>
    <!-- Shopping Cart -->
    <a href="../cart.php" class="cart-icon">🛒<span id="cart-count">0</span></a>
    <a href="admin-dashboard.php">Dashboard</a>
    <!-- Logout Button -->
    <a href="../../backend/logout.php">Logout</a>
  </nav>
</header>
<!-- ================= ADMIN DASHBOARD SECTION ================= -->
<section class="admin-dashboard-page">
  <!-- Dashboard Heading -->
  <div class="admin-dashboard-heading">
    <h1>Admin Dashboard</h1>
    <p>Manage products, update the store, and control all admin actions from one place.</p>
  </div>
  <!-- ================= SEARCH SECTION ================= -->
  <div class="admin-search-box" id="search">
    <h2>Search Product</h2>
    <p>Search for a product by name before editing or deleting it.</p>
    <!-- Search Form -->
    <div class="admin-search-form">
      <!-- Product Name Input -->
      <input type="text" id="searchInput" placeholder="Enter product name">
      <!-- Edit Product Button -->
      <button class="btn" onclick="searchProduct('edit')">Edit</button>
      <!-- Delete Product Button -->
      <button class="btn delete-btn" onclick="searchProduct('delete')">Delete</button>
    </div>
  </div>
  <!-- ================= DASHBOARD CARDS ================= -->
  <div class="admin-dashboard-grid">
    <!-- Add Product Card -->
    <div class="admin-dashboard-card">
      <h2>Add Product</h2>
      <p>Add a new product with image, price, stock, and category details.</p>
      <a href="form.php?mode=add" class="btn">Go to Add Product</a>
    </div>
    <!-- Edit Product Card -->
    <div class="admin-dashboard-card">
      <h2>Modify Product</h2>
      <p>Edit product information such as description, price, stock, or image.</p>
      <a href="#search" class="btn">Search to Edit</a>
    </div>
    <!-- Delete Product Card -->
    <div class="admin-dashboard-card">
      <h2>Delete Product</h2>
      <p>Remove unavailable or unwanted products from the shop collection.</p>
      <a href="#search" class="btn">Search to Delete</a>
    </div>
  </div>
</section>
<!-- ================= FOOTER ================= -->
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>