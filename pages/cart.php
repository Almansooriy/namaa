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
  <title>Namā | Cart</title>
  <!-- Main CSS file -->
  <link rel="stylesheet" href="../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../assets/js/cart.js" defer></script>
  <script src="../assets/js/cart-count.js" defer></script>
</head>
<body>
<!-- ================= HEADER ================= -->
<header class="navbar" role="banner">
  <!-- Website logo -->
  <div class="logo">
    <img src="../assets/images/logo2.png" alt="Namā Logo">
    <span>Namā</span>
  </div>
  <!-- Navigation menu -->
  <nav class="nav-links" aria-label="Main Navigation">
      <a href="../home.php">Home</a>
      <a href="products.php">Products</a>
      <a href="../home.php#about">About</a>
      <a href="contact.php">Contact</a>
      <!-- Shopping cart --><!-- Cart items counter -->
      <a href="cart.php" class="cart-icon" aria-label="Shopping cart" aria-current="page"><span aria-hidden="true">🛒</span><span id="cart-count">0</span></a>
      <?php if(isset($_SESSION['admin_id'])): ?>
        <a href="admin/admin-dashboard.php">Dashboard</a>
        <a href="../backend/logout.php">Logout</a>
      <?php else: ?>
        <a href="admin/admin-login.php">Login</a>
      <?php endif; ?>
  </nav>
</header>
<!-- ================= MAIN CONTENT ================= -->
<main class="cart-page" id="main-content">
  <div class="cart-wrapper">
    <!-- ================= LEFT SECTION ================= -->
    <div class="cart-left-section">
      <!-- ================= CART ITEMS SECTION ================= -->
      <section class="cart-items-container" aria-labelledby="cart-title">
        <!-- Section title -->
        <h1 id="cart-title">Your Cart</h1>
        <!-- Cart items container -->
        <div id="cartItemsList" aria-live="polite"></div>
      </section>
      <!-- ================= SHIPPING SECTION ================= -->
      <section class="checkout-form-section" aria-labelledby="shipping-title">
        <!-- Section title -->
        <h2 id="shipping-title">Shipping Information</h2>
        <!-- Checkout form -->
        <form id="combinedCheckoutForm">
          <!-- Name and phone row -->
          <div class="form-row">
            <!-- Full name -->
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Sarah Ahmed" required aria-required="true">
            </div>
            <!-- Phone number -->
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="05XXXXXXXX" required aria-required="true">
            </div>
          </div>
          <!-- City selection -->
          <div class="form-group">
            <label for="city">City</label>
            <select id="city" name="city" required aria-required="true">
              <option value="" disabled selected>Select your city</option>
              <option value="khobar">Al Khobar</option>
              <option value="dammam">Dammam</option>
              <option value="riyadh">Riyadh</option>
            </select>
          </div>
          <!-- Address textarea -->
          <div class="form-group">
            <label for="address">Delivery Address</label>
            <textarea id="address" name="address" placeholder="District, Street name, House number" required aria-required="true"></textarea>
          </div>
          <!-- ================= PAYMENT METHODS ================= -->
          <fieldset
            style="border: none; padding: 0; margin-top: 30px;">
            <!-- Fieldset title -->
            <legend>
              <h2 style="margin: 0;">Payment Method</h2>
            </legend>
            <!-- Payment options -->
            <div class="payment-grid" role="radiogroup" aria-labelledby="payment-label">
              <!-- Mada / Visa -->
              <label class="payment-option">
                <input type="radio" name="payment" value="mada" checked><span>Mada / Visa</span>
              </label>
              <!-- Apple Pay -->
              <label class="payment-option">
                <input type="radio" name="payment" value="apple"><span>Apple Pay</span>
              </label>
              <!-- Cash on Delivery -->
              <label class="payment-option">
                <input type="radio" name="payment" value="cod"><span>Cash on Delivery</span>
              </label>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
    <!-- ================= RIGHT SECTION ================= -->
    <aside class="cart-right-section" aria-labelledby="summary-title">
      <div class="summary-box">
        <!-- Summary title -->
        <h2 id="summary-title">Order Summary</h2>
        <!-- Subtotal -->
        <div class="summary-row"><span>Subtotal</span>
          <span id="subtotal-val" aria-live="polite">0.00 SAR</span>
        </div>
        <!-- Shipping -->
        <div class="summary-row"><span>Shipping</span><span>30.00 SAR</span></div>
        <!-- Total -->
        <div class="summary-row total"><span>Total</span><span id="total-val" aria-live="polite">0.00 SAR</span></div>
        <!-- ================= CUSTOMIZATION SECTION ================= -->
        <div class="customization-box">
          <h3>Customize Your Order</h3>
          <!-- Add-ons -->
          <fieldset style="border: none; padding: 0;">
            <legend class="sr-only" style="display:none;">Add-ons</legend>
            <!-- Chocolate option -->
            <label class="custom-option">
              <input type="checkbox" name="addon" value="chocolate">Chocolate</label>
            <!-- Coffee option -->
            <label class="custom-option">
              <input type="checkbox" name="addon" value="coffee">Coffee
            </label>
          </fieldset>
          <!-- Special request textarea -->
          <label for="customNote">Special Requests</label>
          <textarea id="customNote" placeholder="Write any special request (type of chocolate, coffee details, etc...)"></textarea>
        </div>
        <!-- ================= DELETE MODAL ================= -->
        <div id="deleteModal" class="modal">
          <div class="modal-content">
             <!-- Modal title -->
             <h3>Are you sure?</h3>
             <!-- Modal description -->
              <p>Do you want to empty the cart?</p>
               <!-- Modal buttons -->
               <div class="modal-buttons">
                  <!-- Confirm delete button -->
                  <button class="confirm-btn" onclick="executeDelete()">Yes</button>
                  <!-- Cancel button -->
                  <button class="cancel-btn" onclick="closeDeleteModal()">Cancel</button>
                </div>
          </div>
        </div>
        <!-- Complete order button -->
        <button type="submit" class="checkout-btn" form="combinedCheckoutForm">Complete Order</button>
        <!-- Delete all cart items button -->
        <button onclick="confirmClearCart()" class="delete-all-btn" aria-label="Clear all items from cart">Delete All</button>
        <!-- Continue shopping link -->
        <a href="products.php" class="continue-link">Continue Shopping</a>
      </div>
    </aside>
  </div>
</main>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>