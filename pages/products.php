<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Namā | Products</title>
  <link rel="stylesheet" href="../assets/css/style.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<?php include '../backend/getProducts.php'; ?>

<body>

<header class="navbar">
  <div class="logo">
    <img src="../assets/images/logo2.png" alt="logo">
    <span>Namā</span>
  </div>

  <nav class="nav-links">
    <a href="../home.html">Home</a>
    <a href="products.php">Products</a>
    <a href="../home.html#about">About</a>
    <a href="contact.html">Contact</a>
    <a href="pages/cart.html" class="cart-icon">
        🛒
        <span id="cart-count">0</span>
    </a>
    <a href="admin/admin-login.php">Login</a>
  </nav>
</header>

<!-- HERO -->
<section class="products-hero">
  <div class="overlay"></div>
  <div class="products-hero-content">
    <h1>Our Products</h1>
    <p>Discover elegant flowers, indoor plants, and curated gift packages.</p>
  </div>
</section>

<!-- FLOWERS -->
<section class="products-section" id="flowers">
  <div class="section-heading">
    <h2>Flowers</h2>
  </div>

  <div class="products-grid">

  <?php
  $query = "SELECT * FROM products WHERE category_id=2";
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_assoc($result)) {
  ?>

    <div class="product-card" onclick="window.location.href='product-details.php?id=<?php echo $row['product_id']; ?>'">
      <img src="../assets/images/<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">

      <div class="product-details">
        <h3><?php echo $row['name']; ?></h3>
        <p><?php echo $row['description']; ?></p>
        <span><?php echo $row['price']; ?> SAR</span>
      </div>
    </div>

  <?php } ?>

  </div>
</section>

<!-- PLANTS -->
<section class="products-section" id="plants">
  <div class="section-heading">
    <h2>Indoor Plants</h2>
  </div>

  <div class="products-grid">

  <?php
  $query = "SELECT * FROM products WHERE category_id=1";
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_assoc($result)) {
  ?>

    <div class="product-card" onclick="window.location.href='product-details.php?id=<?php echo $row['product_id']; ?>'">
      <img src="../assets/images/<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">

      <div class="product-details">
        <h3><?php echo $row['name']; ?></h3>
        <p><?php echo $row['description']; ?></p>
        <span><?php echo $row['price']; ?> SAR</span>
      </div>
    </div>

  <?php } ?>

  </div>
</section>

<!-- PACKAGES -->
<section class="products-section" id="packages">
  <div class="section-heading">
    <h2>Gift Packages</h2>
  </div>

  <div class="products-grid">

  <?php
  $query = "SELECT * FROM products WHERE category_id=3";
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_assoc($result)) {
  ?>

    <div class="product-card" onclick="window.location.href='product-details.php?id=<?php echo $row['product_id']; ?>'">
      <img src="../assets/images/<?php echo $row['image']; ?>" alt="<?php echo $row['name']; ?>">

      <div class="product-details">
        <h3><?php echo $row['name']; ?></h3>
        <p><?php echo $row['description']; ?></p>
        <span><?php echo $row['price']; ?> SAR</span>
      </div>
    </div>

  <?php } ?>

  </div>
</section>

<footer>
  <p>&copy; 2026 Namā. All rights reserved.</p>
</footer>
<script src="../assets/js/cart-count.js"></script>
</body>
</html>