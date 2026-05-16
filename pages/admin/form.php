<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding -->
  <meta charset="UTF-8">
  <!-- Responsive design settings -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Page title -->
  <title>Product Form</title>
  <!-- Main stylesheet -->
  <link rel="stylesheet" href="../../assets/css/style.css" />
  <!-- Google Fonts connection -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <!-- script -->
  <script src="../assets/js/thank-you.js" defer></script>
  <script src="../../assets/js/form.js" defer></script>
</head>
<body>
<?php
/* ===============================
   Database Connection
================================= */
include '../../backend/connection.php';
/* ===============================
   Get Mode and Product ID
================================= */
/* Default mode is add */
$mode = $_GET['mode'] ?? 'add';
/* Get product ID from URL */
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
/* Get search value */
$search = $_GET['search'] ?? '';
/* Validate mode */
if (!in_array($mode, ['add', 'edit', 'delete'])) {
  $mode = 'add';
}
/* Product variable */
$product = null;
/* ===============================
   Load Product Data
================================= */
if (($mode == 'edit' || $mode == 'delete')) {

  /* Search by product ID */
  if ($id > 0) {$stmt = $conn->prepare("SELECT * FROM products WHERE product_id = ?");
    $stmt->bind_param("i", $id);
  }
  /* Search by product name */
  else if ($search != '') {
    $stmt = $conn->prepare("SELECT * FROM products WHERE name LIKE ?");
    $searchTerm = "%" . $search . "%";
    $stmt->bind_param("s", $searchTerm);
  }
    /* No product selected */
  else {
    die("No product selected.");
  }
  /* Execute query */
  $stmt->execute();
  /* Get result */
  $result = $stmt->get_result();
  /* Fetch product data */
  $product = $result->fetch_assoc();
  /* Check if product exists */
  if (!$product) {
    die("Product not found.");
  }
  /* Update ID */
  $id = $product['product_id'];
}
?>
<!-- ================= HEADER ================= -->
<header class="navbar">
  <!-- Logo -->
  <div class="logo">
    <img src="../../assets/images/logo2.png" alt="logo"><span>Namā</span>
  </div>
  <!-- Navigation -->
  <nav class="nav-links">
    <a href="../../home.html">Home</a>
    <a href="../products.php">Products</a>
    <a href="admin-dashboard.php">Dashboard</a>
  </nav>
</header>
<!-- ================= FORM CONTAINER ================= -->
<div class="container">
  <!-- Dynamic page title -->
  <h2 id="title">
    <?php
      /* Display form title based on mode */
    if ($mode == 'add') {
      echo "ADD PRODUCT";
    }
    else if ($mode == 'edit') {
      echo "EDIT PRODUCT";
    }
    else {
      echo "DELETE PRODUCT";
    }
    ?>
  </h2>
  <!-- Product form -->
  <form method="POST" action="../../backend/process-product.php" id="productForm" enctype="multipart/form-data">
    <!-- Hidden input for mode -->
    <input type="hidden" name="mode" value="<?php echo $mode; ?>">
    <!-- Hidden input for product ID -->
    <input type="hidden" name="id" value="<?php echo $id; ?>">
    <!-- ================= IMAGE PREVIEW ================= -->
    <?php if ($mode != 'add'): ?>
      <!-- Show existing image -->
      <img id="preview"
     src="/namaa/assets/images/<?php echo htmlspecialchars($product['image'] ?? ''); ?>"
     alt="Preview"
     style="max-width:200px; display:block;">
    <?php else: ?>
      <!-- Empty preview for add mode -->
      <img id="preview" src="" alt="Preview" style="max-width:200px; display:none;">
    <?php endif; ?>
    <!-- ================= DELETE MODE ================= -->
    <?php if ($mode == 'delete'): ?>
      <!-- Product name -->
      <input type="text" value="<?php echo htmlspecialchars($product['name'] ?? ''); ?>" disabled>
      <!-- Product description -->
      <textarea disabled><?php echo htmlspecialchars($product['description'] ?? ''); ?></textarea>
      <!-- Product price -->
      <input type="number" value="<?php echo htmlspecialchars($product['price'] ?? ''); ?>" disabled>     
      <!-- Product stock -->
      <input type="number" value="<?php echo htmlspecialchars($product['stock'] ?? ''); ?>" disabled>
      <!-- Product image path -->
      <input type="text" value="<?php echo htmlspecialchars($product['image'] ?? ''); ?>" disabled>
      <!-- Product category -->
      <select disabled>
        <option value="2" <?php if (($product['category_id'] ?? '') == 2) echo 'selected'; ?>>Flowers</option>
        <option value="1" <?php if (($product['category_id'] ?? '') == 1) echo 'selected'; ?>>Plants</option>
        <option value="3" <?php if (($product['category_id'] ?? '') == 3) echo 'selected'; ?>>Gift Packages</option>
      </select>
      <!-- Delete button -->
      <button type="submit" id="deleteBtn">Delete</button>
    <!-- ================= ADD / EDIT MODE ================= -->
    <?php else: ?>
      <!-- Product name -->
      <input type="text" id="name" name="name" placeholder="Product Name" value="<?php echo htmlspecialchars($product['name'] ?? ''); ?>" required>
      <!-- Product description -->
      <textarea id="description" name="description" placeholder="Description" required><?php echo htmlspecialchars($product['description'] ?? ''); ?></textarea>
      <!-- Product price -->
      <input type="number" id="price" name="price" placeholder="Price" value="<?php echo htmlspecialchars($product['price'] ?? ''); ?>" min="0" max="10000" step="0.01" required>
      <!-- Product stock -->
      <input type="number" id="stock" name="stock" placeholder="Stock" value="<?php echo htmlspecialchars($product['stock'] ?? ''); ?>" min="0" max="1000" step="1" required>
      <!-- Product image upload -->
      <input type="file" id="imageInput" name="image" accept="image/*" <?php if ($mode == 'add') echo 'required'; ?>>
      <!-- Product category -->
      <select name="category" id="category" required>
        <option value="2" <?php if (($product['category_id'] ?? '') == 2) echo 'selected'; ?>>Flowers</option>
        <option value="1" <?php if (($product['category_id'] ?? '') == 1) echo 'selected'; ?>>Plants</option>
        <option value="3" <?php if (($product['category_id'] ?? '') == 3) echo 'selected'; ?>>Gift Packages</option>  
      </select>
      <!-- Save button -->
      <button type="submit" id="saveBtn">Save</button>
    <?php endif; ?>
  </form>
</div>
<footer role="contentinfo"><p>&copy; 2026 Namā. All rights reserved.</p></footer>
</body>
</html>