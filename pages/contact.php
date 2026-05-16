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
  <title>Namā | Contact Us</title>
  <!-- Main CSS file -->
  <link rel="stylesheet" href="../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../assets/js/contact.js" defer></script>
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
      <a href="contact.php" aria-current="page">Contact</a>
      <!-- Shopping cart --><!-- Cart counter -->
      <a href="cart.php" class="cart-icon" aria-label="Shopping cart"><span aria-hidden="true">🛒</span><span id="cart-count">0</span></a>
      <?php if(isset($_SESSION['admin_id'])): ?>
        <a href="admin/admin-dashboard.php">Dashboard</a>
        <a href="../backend/logout.php">Logout</a>
      <?php else: ?>
        <a href="admin/admin-login.php">Login</a>
      <?php endif; ?>
  </nav>
</header>
<!-- ================= MAIN CONTENT ================= -->
<main id="main-content">
  <!-- ================= CONTACT SECTION ================= -->
  <section class="contact-page" aria-labelledby="contact-title">
    <!-- Contact heading -->
    <div class="contact-heading">
      <h1 id="contact-title">Contact Us</h1>
      <p>Have a question or a special order request?Send us a message.</p>
    </div>
    <!-- Contact wrapper -->
    <div class="contact-wrapper">
      <!-- ================= CONTACT INFORMATION ================= -->
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <!-- Contact details -->
        <address style="font-style: normal;">
          <!-- Email -->
          <p><strong>Email:</strong>
            <a href="mailto:support@namaa.com">support@namaa.com</a>
          </p>
          <!-- Phone number -->
          <p><strong>Phone:</strong>
            <a href="tel:+966501234567">+966 50 123 4567</a>
          </p>
          <!-- Store location -->
          <p><strong>Location:</strong>Dammam, Saudi Arabia</p>
        </address>
        <!-- Working hours -->
        <p><strong>Working Hours:</strong><time>Sun - Thu, 9:00 AM - 6:00 PM</time></p>
        <!-- Google Maps iframe -->
        <iframe class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.190186157592!2d50.191202284966224!3d26.385042583357713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef826c3c4529%3A0x126e95aa294da63c!2z2YPZhNmK2Kkg2LnZhNmI2YUg2KfZhNit2KfYs9ioINmI2KrZgtmG2YrYqSDYp9mE2YXYudmE2YjZhdin2Kog2YTZhNio2YbYp9iq!5e0!3m2!1sar!2ssa!4v1776341089315!5m2!1sar!2ssa"
          title="Namā Store Location Map"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <!-- ================= SUCCESS MESSAGE ================= -->
      <div id="successMessage" class="success-message" role="status" aria-live="polite" style="display: none;"> Message sent successfully!</div>
      <!-- ================= CONTACT FORM ================= -->
      <form class="contact-form" aria-label="Contact form">
        <!-- Name input -->
        <div class="form-group">
          <label for="userName">Your Name</label>
          <input type="text" id="userName" placeholder="Enter your full name" required aria-required="true">
        </div>
        <!-- Email input -->
        <div class="form-group">
          <label for="userEmail">Your Email</label>
          <input type="email" id="userEmail" placeholder="example@mail.com" required aria-required="true">
        </div>
        <!-- Subject input -->
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" placeholder="What is this regarding?" required aria-required="true">
        </div>
        <!-- Message textarea -->
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" rows="6" placeholder="Write your message here..." required aria-required="true"></textarea>    
        </div>
        <!-- Submit button -->
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
</main>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>