<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  <!-- Responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Page title -->
  <title>Namā | Products</title>
  <!-- Main stylesheet -->
  <link rel="stylesheet" href="../assets/css/style.css">
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../assets/js/cart-count.js" defer></script>
</head>
<!-- Include database connection -->
<?php include '../backend/getProducts.php'; ?>
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
    <a href="../home.html">Home</a>
    <a href="products.php">Products</a>
    <a href="../home.html#about">About</a>
    <a href="contact.html">Contact</a>
    <!-- Shopping cart --><!-- Cart items count -->
    <a href="pages/cart.html" class="cart-icon">🛒<span id="cart-count">0</span></a>
    <a href="admin/admin-login.php">Login</a>
  </nav>
</header>
<!-- ================= HERO SECTION ================= -->
<section class="products-hero">
  <!-- Dark overlay -->
  <div class="overlay"></div>
  <!-- Hero content -->
  <div class="products-hero-content">
    <h1>Our Products</h1>
    <p>Discover elegant flowers, indoor plants, and curated gift packages.</p>
  </div>
</section>
<!-- ================= FLOWERS SECTION ================= -->
<section class="products-section" id="flowers">
  <!-- Section heading -->
  <div class="section-heading">
    <h2>Flowers</h2>
  </div>
  <!-- Products grid -->
  <div class="products-grid">
  <?php
  // Select all flower products
  $query = "SELECT * FROM products WHERE category_id=2";
  $result = mysqli_query($conn, $query);
  // Loop through products
  while($row = mysqli_fetch_assoc($result)) {
  ?>
    <!-- Product card -->
    <div class="product-card" onclick="window.location.href='product-details.php?id=<?php echo $row['product_id']; ?>'">
      <!-- Product image -->
      <img src="../assets/images/<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">
      <!-- Product details -->
      <div class="product-details">
        <h3><?php echo $row['name']; ?></h3>
        <p><?php echo $row['description']; ?></p>
        <span><?php echo $row['price']; ?> SAR</span>
      </div>
    </div>
  <?php } ?>
  </div>
</section>
<!-- ================= PLANTS SECTION ================= -->
<section class="products-section" id="plants">
  <!-- Section heading -->
  <div class="section-heading">
    <h2>Indoor Plants</h2>
  </div>
  <!-- Products grid -->
  <div class="products-grid">
  <?php
  // Select all indoor plants
  $query = "SELECT * FROM products WHERE category_id=1";
  $result = mysqli_query($conn, $query);
  // Loop through products
  while($row = mysqli_fetch_assoc($result)) {
  ?>
    <!-- Product card -->
    <div class="product-card"
         onclick="window.location.href='product-details.php?id=<?php echo $row['product_id']; ?>'">
      <!-- Product image -->
      <img src="../assets/images/<?php echo $row['image']; ?>"
           alt="<?php echo $row['name']; ?>">
      <!-- Product details -->
      <div class="product-details">
        <h3><?php echo $row['name']; ?></h3>
        <p><?php echo $row['description']; ?></p>
        <span><?php echo $row['price']; ?> SAR</span>
      </div>
    </div>
  <?php } ?>
  </div>
</section>
<!-- ================= GIFT PACKAGES SECTION ================= -->
<section class="products-section" id="packages">
  <!-- Section heading -->
  <div class="section-heading">
    <h2>Gift Packages</h2>
  </div>
  <!-- Products grid -->
  <div class="products-grid">
  <?php
  // Select all gift packages
  $query = "SELECT * FROM products WHERE category_id=3";
  $result = mysqli_query($conn, $query);
  // Loop through products
  while($row = mysqli_fetch_assoc($result)) {
  ?>
    <!-- Product card -->
    <div class="product-card"
         onclick="window.location.href='product-details.php?id=<?php echo $row['product_id']; ?>'">
      <!-- Product image -->
      <img src="../assets/images/<?php echo $row['image']; ?>"
           alt="<?php echo $row['name']; ?>">
      <!-- Product details -->
      <div class="product-details">
        <h3><?php echo $row['name']; ?></h3>
        <p><?php echo $row['description']; ?></p>
        <span><?php echo $row['price']; ?> SAR</span>
      </div>
    </div>
  <?php } ?>
  </div>
</section>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>