<?php
include __DIR__ . "/connection.php";


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: /namaa/pages/admin/admin-dashboard.php");
    exit;
}

$mode = $_POST["mode"] ?? "";
$id = isset($_POST["id"]) ? intval($_POST["id"]) : 0;

/* DELETE FIRST */
if ($mode === "delete") {
    if ($id <= 0) {
        die("Invalid product ID.");
    }

    $stmt = $conn->prepare("DELETE FROM products WHERE product_id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();

    header("Location: /namaa/pages/admin/admin-dashboard.php");
    exit;
}

/* ADD / EDIT */
$name = $_POST["name"] ?? "";
$price = $_POST["price"] ?? "";
$description = $_POST["description"] ?? "";
$stock = $_POST["stock"] ?? "";
$image = "";

if (isset($_FILES["image"]) && $_FILES["image"]["error"] === 0) {

    $uploadDir = __DIR__ . "/../assets/images/";

    $fileName = basename($_FILES["image"]["name"]);

    $targetPath = $uploadDir . $fileName;

    move_uploaded_file($_FILES["image"]["tmp_name"], $targetPath);

    $image = $fileName;
}
$category = $_POST["category"] ?? "";

if ($name === "" || $price === "" || $description === "" || $stock === "" || $category === "") {
    die("Please fill all fields.");
}

if ($mode === "add" && $image === "") {
    die("Please upload an image.");
}

if ($price < 0 || $stock < 0) {
    die("Invalid input.");
}

if ($mode === "add") {
    $stmt = $conn->prepare(
        "INSERT INTO products (name, price, description, stock, image, category_id)
         VALUES (?, ?, ?, ?, ?, ?)"
    );
    $stmt->bind_param("sdsisi", $name, $price, $description, $stock, $image, $category);
}

else if ($mode === "edit") {
    if ($id <= 0) {
        die("Invalid product ID.");
    }

if ($image === "") {

    $oldStmt = $conn->prepare(
        "SELECT image FROM products WHERE product_id = ?"
    );

    $oldStmt->bind_param("i", $id);

    $oldStmt->execute();

    $oldResult = $oldStmt->get_result();

    $oldProduct = $oldResult->fetch_assoc();

    $image = $oldProduct["image"];
}

    $stmt = $conn->prepare(
        "UPDATE products 
         SET name = ?, price = ?, description = ?, stock = ?, image = ?, category_id = ?
         WHERE product_id = ?"
    );
    $stmt->bind_param("sdsisii", $name, $price, $description, $stock, $image, $category, $id);
}

else {
    die("Invalid action.");
}

$stmt->execute();

header("Location: /namaa/pages/admin/admin-dashboard.php");
exit;
?>