<?php

// Enable error reporting for debugging
ini_set('display_errors', 1);

error_reporting(E_ALL);

// Include database connection file
include __DIR__ . "/connection.php";

// Set response type to JSON
header("Content-Type: application/json");

// Check if product ID exists in URL
if (!isset($_GET['id'])) {

    // Return error message
    echo json_encode(["error" => "No ID"]);
    exit;
}

// Convert ID to integer
$id = intval($_GET['id']);

// SQL query to get product by ID
$query = "SELECT * FROM products WHERE product_id = $id";

// Execute query
$result = mysqli_query($conn, $query);

// Check if SQL query failed
if (!$result) {

    // Return SQL error message
    echo json_encode(["error" => "SQL Error", "details" => mysqli_error($conn)]);
    exit;
}

// Fetch product data
$row = mysqli_fetch_assoc($result);

// Check if product exists
if (!$row) {

    // Return not found message
    echo json_encode(["error" => "Not found"]);
    exit;
}

// Convert product data to JSON
echo json_encode($row);

?>