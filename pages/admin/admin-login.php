
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Namā | Admin Login</title>
  <link rel="stylesheet" href="../../assets/css/style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>

<header class="navbar">
  <div class="logo">
  <img src="../../assets/images/logo2.png" alt="logo">
  <span>Namā</span>
  </div>
  <nav class="nav-links">
    <a href="../../home.html">Home</a>
    <a href="../products.php">Products</a>
    <a href="../../home.html#about">About</a>
    <a href="../contact.html">Contact</a>
    <a href="../cart.html" class="cart-icon">
        🛒
        <span id="cart-count">0</span>
      </a>
    <a href="admin-login.php">Login</a>
  </nav>
</header>

<section class="admin-login-page">
  <div class="admin-login-card">
    <div class="admin-login-heading">
      <h1>Admin Login</h1>
      <p>Sign in to manage products and control the store content.</p>
    </div>
    <form class="admin-login-form" method="POST" action="../../backend/check-login.php">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" placeholder="Enter admin username" required>

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="Enter password" required>

      <button type="submit">Login</button>
    </form>
  </div>
</section>

<footer>
  <p>&copy; 2026 Namā. All rights reserved.</p>
</footer>
<script src="../../assets/js/cart-count.js"></script>
</body>
</html>
