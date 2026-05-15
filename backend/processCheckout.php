<?php

// Start session
session_start();

// Include database connection
include __DIR__ . "/connection.php";

// Set response type to JSON
header("Content-Type: application/json");

// Read JSON data from frontend
$data = json_decode(file_get_contents("php://input"), true);

// Check if cart exists and is not empty
if (!$data || !isset($data["cart"]) || count($data["cart"]) === 0){

    // Return error response
    echo json_encode(["success" => false,"message" => "Cart is empty."]);
    exit;
}

// Store cart data
$cart = $data["cart"];

// Save cart temporarily in session
$_SESSION["cart"] = $cart;

// Store customer information
$customer = $data["customer"] ?? [];

// Store customization data
$customization = $data["customization"] ?? [];

// Start database transaction
$conn->begin_transaction();

try {

    // Loop through all cart items
    foreach ($cart as $item) {

        // Get product ID and quantity
        $productId = intval($item["id"]);

        $quantity = intval($item["quantity"]);

        // Prepare SQL query to get product stock
        $stmt = $conn->prepare("SELECT name, stock FROM products WHERE product_id = ?");

        // Bind product ID
        $stmt->bind_param("i", $productId);

        // Execute query
        $stmt->execute();

        // Get result
        $result = $stmt->get_result();

        // Fetch product data
        $product = $result->fetch_assoc();

        // Check if product exists
        if (!$product) {throw new Exception("Product not found.");}

        // Check if requested quantity exceeds stock
        if ($quantity > intval($product["stock"])) {throw new Exception($product["name"] ." has only " .$product["stock"] ." items available.");
        }

        // Update stock quantity in database
        $update = $conn->prepare("UPDATE products SET stock = stock - ? WHERE product_id = ?");

        // Bind quantity and product ID
        $update->bind_param("ii", $quantity, $productId);

        // Execute update query
        $update->execute();
    }

    // Save last order details in session
    $_SESSION["last_order"] = ["cart" => $cart, "customer" => $customer, "customization" => $customization, "date" => date("Y-m-d H:i:s")];

    // Create empty purchase history array
    $pastPurchases = [];

    // Check if purchase history cookie exists
    if (isset($_COOKIE["nama_past_purchases"])) {

        // Decode cookie data
        $pastPurchases = json_decode($_COOKIE["nama_past_purchases"], true) ?: [];
    }

    // Save current order items into purchase history
    foreach ($cart as $item) {
        $pastPurchases[] = ["name" => $item["name"], "quantity" => $item["quantity"], "date" => date("Y-m-d")
        ];
    }

    // Store updated purchase history in cookie
    setcookie("nama_past_purchases", json_encode($pastPurchases), time() + (30 * 24 * 60 * 60),"/");

    // Commit all database changes
    $conn->commit();

    // Clear cart session
    unset($_SESSION["cart"]);

    // Return success response
    echo json_encode(["success" => true, "message" =>"Order completed successfully."]);

} catch (Exception $e) {

    // Rollback database changes if error happens
    $conn->rollback();

    // Return error response
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>