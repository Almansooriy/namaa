<?php
session_start();

if(!isset($_SESSION['admin_id'])){
    header("Location: admin-login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Namā | Admin Dashboard</title>
  <link rel="stylesheet" href="../../assets/css/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <script src="../../assets/js/admin-dashboard.js" defer></script>
</head>
<body>ِِ

<header class="navbar">
  <div class="logo">
  <img src="../../assets/images/logo2.png" alt="logo">
  <span>Namā</span>
  </div>
  <nav class="nav-links">
    <a href="../../home.html">Home</a>
    <a href="../products.php">Products</a>
    <a href="admin-dashboard.php">Dashboard</a>
    <a href="../../home.html#about">About</a>
    <a href="../contact.html">Contact</a>
    <a href="../cart.html" class="cart-icon">
        🛒
        <span id="cart-count">0</span>
      </a>
    <a href="../../backend/logout.php">Logout</a>
  </nav>
</header>

<section class="admin-dashboard-page">
  <div class="admin-dashboard-heading">
    <h1>Admin Dashboard</h1>
    <p>Manage products, update the store, and control all admin actions from one place.</p>
  </div>
  <div class="admin-search-box" id="search">
  <h2>Search Product</h2>
  <p>Search for a product by name before editing or deleting it.</p>

   <div class="admin-search-form">
  <input type="text" placeholder="Enter product name">
  <button class="btn" onclick="searchProduct('edit')">Edit</button>
  <button class="btn delete-btn" onclick="searchProduct('delete')">Delete</button>
</div>
  </div>
  <div class="admin-dashboard-grid">
    <div class="admin-dashboard-card">
      <h2>Add Product</h2>
      <p>Add a new product with image, price, stock, and category details.</p>
      <a href="form.php?mode=add" class="btn">Go to Add Product</a>
    </div>

    <div class="admin-dashboard-card">
      <h2>Modify Product</h2>
      <p>Edit product information such as description, price, stock, or image.</p>
      <a href="#search" class="btn">Search to Edit</a>
    </div>

    <div class="admin-dashboard-card">
      <h2>Delete Product</h2>
      <p>Remove unavailable or unwanted products from the shop collection.</p>
      <a href="#search" class="btn">Search to Delete</a>
    </div>
    
  </div>


</section>

<footer>
  <p>&copy; 2026 Namā. All rights reserved.</p>
</footer>

</body>
</html>
