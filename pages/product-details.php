<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8" />
  <!-- Responsive design for mobile devices -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Page title -->
  <title>Namā | Product Details</title>
  <!-- Main CSS file -->
  <link rel="stylesheet" href="../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../assets/js/product-details.js?v=12" defer></script>
</head>
<body>
<!-- ================= HEADER ================= -->
<header class="navbar">
  <!-- Website Logo -->
  <div class="logo">
    <img src="../assets/images/logo2.png" alt="logo">
    <span>Namā</span>
  </div>
  <!-- Navigation Menu -->
  <nav class="nav-links">
    <a href="../home.php">Home</a>
    <a href="products.php">Products</a>
    <a href="../home.php#about">About</a>
    <a href="contact.php">Contact</a>
    <!-- Shopping Cart --><!-- Cart items counter -->
    <a href="cart.php" class="cart-icon">🛒<span id="cart-count">0</span></a>
          
    <?php if(isset($_SESSION['admin_id'])): ?> 
      <a href="admin/admin-dashboard.php">Dashboard</a>
      <a href="../backend/logout.php">Logout</a>
    <?php else: ?>
      <a href="admin/admin-login.php">Login</a>
    <?php endif; ?>
  </nav>
</header>
<!-- ================= PRODUCT DETAILS SECTION ================= -->
<section class="product-details-page">
  <div class="product-details-wrapper">
    <!-- Product Image -->
    <div class="product-image-box">
      <img id="productImage" src="" alt="">
    </div>
    <!-- Product Information -->
    <div class="product-info-box">
      <!-- Product Category -->
      <p class="product-category" id="productCategory"></p>
      <!-- Product Name -->
      <h1 id="productName"></h1>
      <!-- Product Price -->
      <p class="product-price" id="productPrice"></p>
      <!-- Product Description -->
      <p class="product-description" id="productDescription"></p>
      <!-- Product Actions -->
      <div class="product-actions">
        <!-- Quantity Controller -->
        <div class="main-qty-wrapper">
          <div class="qty-box">
            <!-- Decrease quantity button -->
            <button type="button" onclick="changeMainQty(-1)" aria-label="Decrease quantity">-</button>
            <!-- Quantity Display -->
            <span id="mainQty" aria-live="polite">1</span>
            <!-- Increase quantity button -->
            <button type="button" onclick="changeMainQty(1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <br>
        <!-- Product Help Section -->
        <div class="product-help">
          <h3>Need Help?</h3>
          <p>Click the button below to view product help information.</p>
          <!-- Open Help Popup Button -->
          <button type="button" class="secondary-btn" onclick="openHelpPopup()" aria-label="Open product help popup">Open Help</button>
        </div>
        <!-- Product Action Buttons -->
        <div class="button-group" style="display: flex; gap: 10px; margin-top: 15px;">
          <!-- Add to Cart Button -->
          <button onclick="handleAddToCart()" class="btn">Add to Cart</button>
          <!-- Buy Now Button -->
          <button onclick="handleBuyNow()" class="btn">Buy Now</button>
          <!-- Back to Products Button -->
          <a href="products.php" class="secondary-btn">Back to Products</a>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ================= SUGGESTIONS SECTION ================= -->
<section class="suggestions-section">
  <!-- Section Title -->
  <h2 style="text-align: center; margin-top: 50px;">You May Also Like</h2>
  <!-- Suggestions Container -->
  <div class="suggestions-container" id="suggestionsContainer"></div>
</section>

<!-- ================= HELP POPUP ================= -->
<div id="helpPopup" class="modal" role="dialog" aria-modal="true" aria-labelledby="helpPopupTitle">
  <div class="modal-content">
    <!-- Popup Title -->
    <h3 id="helpPopupTitle">Product Help</h3>
    <!-- Popup Description -->
    <p>If you have any questions about this product, feel free to contact us.</p>
    <!-- Help Information -->
    <ul>
      <li>Fresh flowers delivered daily</li>
      <li>Delivery within 24-48 hours</li>
      <li>Custom message available with your order</li>
    </ul>
    <!-- Contact Button -->
    <a href="contact.php" class="secondary-btn">Contact Us</a>
    <br>
    <!-- Close Popup Button -->
    <button type="button" class="cancel-btn" onclick="closeHelpPopup()" aria-label="Close help popup">Close</button>
  </div>
</div>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>