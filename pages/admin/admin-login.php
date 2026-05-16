<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8" />
  <!-- Responsive design settings -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Page title -->
  <title>Namā | Admin Login</title>
  <!-- Main CSS file -->
  <link rel="stylesheet" href="../../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../../assets/js/cart-count.js" defer></script>
  <script src="../../assets/js/admin-login.js" defer></script>
</head>
<body>
<!-- ================= HEADER ================= -->
<header class="navbar">
  <!-- Website logo -->
  <div class="logo">
    <img src="../../assets/images/logo2.png" alt="Namā logo"><span>Namā</span>
  </div>
  <!-- Navigation links -->
  <nav class="nav-links">
    <a href="../../home.php">Home</a>
    <a href="../products.php">Products</a>
    <a href="../../home.php#about">About</a>
    <a href="../contact.php">Contact</a>
    <a href="../cart.php" class="cart-icon">🛒<span id="cart-count">0</span></a>
    <a href="admin-login.php">Login</a>
  </nav>
</header>
<!-- ================= LOGIN SECTION ================= -->
<section class="admin-login-page">
  <div class="admin-login-card">
    <!-- Login heading -->
    <div class="admin-login-heading">
      <h1>Admin Login</h1>
      <p>Sign in to manage products and control the store content.</p>
    </div>
    <!-- Login form -->
    <form id="loginForm" class="admin-login-form" method="POST" action="../../backend/check-login.php">
      <!-- Email field -->
      <label for="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Enter admin email" required>
      <!-- Email validation message -->
      <small id="emailError" class="error-message"></small>
      <!-- Password field -->
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter password" required>
      <!-- Submit button -->
      <button type="submit">Login</button>
    </form>
  </div>
</section>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>