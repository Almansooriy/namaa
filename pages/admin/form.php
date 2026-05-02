<?php
include '../../backend/connection.php';

$mode = $_GET['mode'] ?? 'add';
$id = $_GET['id'] ?? null;

$product = null;

if(($mode == 'edit' || $mode == 'delete') && $id){
    $sql = "SELECT * FROM products WHERE product_id = $id";
    $result = $conn->query($sql);
    $product = $result->fetch_assoc();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Form</title>

  <link rel="stylesheet" href="../../assets/css/style.css" />
  <script src="../../assets/js/form.js" defer></script>
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
    <a href="admin-dashboard.php">Dashboard</a>
    <a href="logout.php">Logout</a>
  </nav>
</header>

<div class="container">
  <h2 id="title"><?php echo strtoupper($mode); ?> PRODUCT</h2>

  <form method="POST" action="../../backend/process-product.php" id="productForm">

    <input type="hidden" name="mode" value="<?php echo $mode; ?>">
    <input type="hidden" name="id" value="<?php echo $id; ?>">

    <!-- Preview -->
    <img id="preview" src="<?php echo $product['image'] ?? ''; ?>" alt="Preview" style="max-width:200px; display:block; margin-bottom:10px;">

    <!-- Name -->
    <input type="text" id="name" name="name" placeholder="Product Name" 
      value="<?php echo $product['name'] ?? ''; ?>" required>

    <!-- Description -->
    <textarea id="description" name="description" placeholder="Description">
      <?php echo $product['description'] ?? ''; ?></textarea>

    <!-- Price -->
    <input type="number" id="price" name="price" placeholder="Price" 
      value="<?php echo $product['price'] ?? ''; ?>" min="0" max="10000" step="0.01" required>

    <!-- Stock -->
    <input 
      type="number" id="stock" name="stock" placeholder="Stock"
        value="<?php echo $product['stock'] ?? ''; ?>" min="0" max="1000" step="1" required>

    <!-- Image -->
    <input type="text" id="imageInput" name="image" placeholder="Image URL" 
      value="<?php echo $product['image'] ?? ''; ?>">

    <!-- Category -->
    <select name="category" id="category">
      <option value="1" <?php if(($product['category_id'] ?? '') == 1) echo 'selected'; ?>>Flowers</option>
      <option value="2" <?php if(($product['category_id'] ?? '') == 2) echo 'selected'; ?>>Plants</option>
      <option value="3" <?php if(($product['category_id'] ?? '') == 3) echo 'selected'; ?>>Gift Packages</option>
    </select>

    <!-- Buttons -->
    <?php if($mode == 'delete'): ?>
      <button type="submit" id="deleteBtn">Delete</button>
    <?php else: ?>
      <button type="submit" id="saveBtn">Save</button>
    <?php endif; ?>

  </form>
</div>

<footer>
  <p>&copy; 2026 Namā. All rights reserved.</p>
</footer>

</body>
</html>