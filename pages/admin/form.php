<?php
include '../../backend/connection.php';

$mode = $_GET['mode'] ?? 'add';
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
$search = $_GET['search'] ?? '';
if (!in_array($mode, ['add', 'edit', 'delete'])) {
    $mode = 'add';
}

$product = null;

if (($mode == 'edit' || $mode == 'delete')) {

    if ($id > 0) {

        $stmt = $conn->prepare("SELECT * FROM products WHERE product_id = ?");
        $stmt->bind_param("i", $id);

    } else if ($search != '') {

        $stmt = $conn->prepare("SELECT * FROM products WHERE name LIKE ?");
        $searchTerm = "%" . $search . "%";
        $stmt->bind_param("s", $searchTerm);

    } else {
        die("No product selected.");
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $product = $result->fetch_assoc();

    if (!$product) {
        die("Product not found.");
    }

    $id = $product['product_id'];
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
  <h2 id="title">
    <?php
      if ($mode == 'add') echo "ADD PRODUCT";
      else if ($mode == 'edit') echo "EDIT PRODUCT";
      else echo "DELETE PRODUCT";
    ?>
  </h2>

  <form method="POST" action="../../backend/process-product.php" id="productForm" enctype="multipart/form-data">

    <input type="hidden" name="mode" value="<?php echo $mode; ?>">
    <input type="hidden" name="id" value="<?php echo $id; ?>">

    <?php if ($mode != 'add'): ?>
      <img id="preview"
           src="<?php echo htmlspecialchars($product['image'] ?? ''); ?>"
           alt="Preview"
           style="max-width:200px; display:block;">
    <?php else: ?>
      <img id="preview"
           src=""
           alt="Preview"
           style="max-width:200px; display:none;">
    <?php endif; ?>

    <?php if ($mode == 'delete'): ?>

      <input type="text"
             value="<?php echo htmlspecialchars($product['name'] ?? ''); ?>"
             disabled>

      <textarea disabled><?php echo htmlspecialchars($product['description'] ?? ''); ?></textarea>

      <input type="number"
             value="<?php echo htmlspecialchars($product['price'] ?? ''); ?>"
             disabled>

      <input type="number"
             value="<?php echo htmlspecialchars($product['stock'] ?? ''); ?>"
             disabled>

      <input type="text"
             value="<?php echo htmlspecialchars($product['image'] ?? ''); ?>"
             disabled>

      <select disabled>
        <option value="2" <?php if (($product['category_id'] ?? '') == 2) echo 'selected'; ?>>Flowers</option>
        <option value="1" <?php if (($product['category_id'] ?? '') == 1) echo 'selected'; ?>>Plants</option>
        <option value="3" <?php if (($product['category_id'] ?? '') == 3) echo 'selected'; ?>>Gift Packages</option>
      </select>

      <input type="hidden" name="mode" value="delete">
      <input type="hidden" name="id" value="<?php echo $id; ?>">

      <button type="submit" id="deleteBtn">Delete</button>

    <?php else: ?>

      <input type="text"
             id="name"
             name="name"
             placeholder="Product Name"
             value="<?php echo htmlspecialchars($product['name'] ?? ''); ?>"
             required>

      <textarea id="description"
                name="description"
                placeholder="Description"
                required><?php echo htmlspecialchars($product['description'] ?? ''); ?></textarea>

      <input type="number"
             id="price"
             name="price"
             placeholder="Price"
             value="<?php echo htmlspecialchars($product['price'] ?? ''); ?>"
             min="0"
             max="10000"
             step="0.01"
             required>

      <input type="number"
             id="stock"
             name="stock"
             placeholder="Stock"
             value="<?php echo htmlspecialchars($product['stock'] ?? ''); ?>"
             min="0"
             max="1000"
             step="1"
             required>

      <input type="file"
             id="imageInput"
             name="image"
              accept="image/*"
             <?php if ($mode == 'add') echo 'required'; ?>>

      <select name="category" id="category" required>
        <option value="2" <?php if (($product['category_id'] ?? '') == 2) echo 'selected'; ?>>Flowers</option>
        <option value="1" <?php if (($product['category_id'] ?? '') == 1) echo 'selected'; ?>>Plants</option>
        <option value="3" <?php if (($product['category_id'] ?? '') == 3) echo 'selected'; ?>>Gift Packages</option>
      </select>

      <button type="submit" id="saveBtn">Save</button>

    <?php endif; ?>

  </form>
</div>

<footer>
  <p>&copy; 2026 Namā. All rights reserved.</p>
</footer>

</body>
</html>