<?php

// Include database connection file
include __DIR__ . "/connection.php";

// Check if request method is POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    // Redirect to dashboard if request is invalid
    header("Location: /namaa/pages/admin/admin-dashboard.php");
    exit;
}

// Get form mode (add / edit / delete)
$mode = $_POST["mode"] ?? "";

// Get product ID
$id = isset($_POST["id"]) ? intval($_POST["id"]) : 0;

/* ================= DELETE PRODUCT ================= */

if ($mode === "delete") {

    // Validate product ID
    if ($id <= 0) {

        die("Invalid product ID.");
    }

    // Prepare delete query
    $stmt = $conn->prepare(
        "DELETE FROM products
         WHERE product_id = ?"
    );

    // Bind ID parameter
    $stmt->bind_param("i", $id);

    // Execute query
    $stmt->execute();

    // Redirect back to dashboard
    header("Location: /namaa/pages/admin/admin-dashboard.php");
    exit;
}

/* ================= ADD / EDIT PRODUCT ================= */

// Get product name
$name = $_POST["name"] ?? "";

// Get product price
$price = $_POST["price"] ?? "";

// Get product description
$description = $_POST["description"] ?? "";

// Get stock quantity
$stock = $_POST["stock"] ?? "";

// Image variable
$image = "";

// Check if image is uploaded successfully
if (isset($_FILES["image"]) && $_FILES["image"]["error"] === 0){

    // Upload folder path
    $uploadDir = __DIR__ . "/../assets/images/";

    // Get image file name
    $fileName = basename($_FILES["image"]["name"]);

    // Full upload path
    $targetPath = $uploadDir . $fileName;

    // Move uploaded image to folder
    move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath);

    // Save image name
    $image = $fileName;
}

// Get category ID
$category = $_POST["category"] ?? "";

/* ================= VALIDATION ================= */

// Check if required fields are empty
if ($name === "" || $price === "" || $description === "" || $stock === "" || $category === "" ){
    die("Please fill all fields.");
}

// Check if image exists when adding product
if ($mode === "add" && $image === "") {
    die("Please upload an image.");
}

// Validate price and stock
if ($price < 0 || $stock < 0) {
    die("Invalid input.");
}

/* ================= ADD PRODUCT ================= */

if ($mode === "add") {

    // Prepare insert query
    $stmt = $conn->prepare("INSERT INTO products(name, price, description, stock, image, category_id) VALUES (?, ?, ?, ?, ?, ?)");

    // Bind form values
    $stmt->bind_param("sdsisi", $name, $price, $description, $stock, $image, $category);
}

/* ================= EDIT PRODUCT ================= */

else if ($mode === "edit") {

    // Validate product ID
    if ($id <= 0) {
        die("Invalid product ID.");
    }

    // Keep old image if no new image uploaded
    if ($image === "") {

        // Get old image query
        $oldStmt = $conn->prepare("SELECT image FROM products WHERE product_id = ?");

        // Bind product ID
        $oldStmt->bind_param("i", $id);

        // Execute query
        $oldStmt->execute();

        // Get query result
        $oldResult = $oldStmt->get_result();

        // Fetch product data
        $oldProduct = $oldResult->fetch_assoc();

        // Keep old image name
        $image = $oldProduct["image"];
    }

    // Prepare update query
    $stmt = $conn->prepare("UPDATE products SET name = ?, price = ?, description = ?, stock = ?, image = ?, category_id = ? WHERE product_id = ?");

    // Bind updated values
    $stmt->bind_param("sdsisii", $name, $price, $description, $stock, $image, $category, $id);
}

/* ================= INVALID ACTION ================= */

else {
    die("Invalid action.");
}

/* ================= EXECUTE QUERY ================= */

// Execute SQL query
$stmt->execute();

// Redirect back to dashboard
header("Location: /namaa/pages/admin/admin-dashboard.php");
exit;

?>