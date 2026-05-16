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
  <title>Namā | Thank You</title>
  <!-- Main stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../assets/js/cart-count.js" defer></script> 
  <script src="../assets/js/thank-you.js" defer></script>
</head>
<body>
    <!-- ================= HEADER SECTION ================= -->
<header class="navbar">
  <!-- Website logo -->
  <div class="logo">
    <img src="../assets/images/logo2.png" alt="logo">
    <span>Namā</span>
  </div>
  <!-- Navigation links -->
  <nav class="nav-links">
    <a href="../home.php">Home</a>
    <a href="products.php">Products</a>
    <a href="../home.php#about">About</a>
    <a href="contact.php">Contact</a>
    <a href="cart.php" class="cart-icon">🛒<span id="cart-count">0</span></a>
          
    <?php if(isset($_SESSION['admin_id'])): ?>
      <a href="admin/admin-dashboard.php">Dashboard</a>
      <a href="../backend/logout.php">Logout</a>
    <?php else: ?>
      <a href="admin/admin-login.php">Login</a>
      <?php endif; ?>

  </nav>
</header>
<!-- ================= THANK YOU SECTION ================= -->
<main class="thank-you-container">
    <!-- Thank you message -->
    <div style="padding-top: 50px;">
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully.</p>
    </div>
    <!-- ================= ORDER HISTORY SECTION ================= -->
    <div class="history-section-wrapper">
        <!-- Section title -->
        <h2 class="main-history-title">My Orders</h2>
        <!-- Order history will be displayed here -->
        <div id="orderHistoryList"></div>
    </div>
    <!-- Back to home button -->
    <div style="margin-bottom: 50px;">
        <a href="../home.php" class="home-btn">Back to Home</a>
    </div>
</main>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>