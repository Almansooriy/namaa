<?php

// Include database connection file
include 'connection.php';

// Get category value from URL
$category = isset($_GET['category']) ? $_GET['category'] : '';

// Convert category name to category ID
switch($category){

    // Flowers category
    case "flowers":$cat_id = 1;
    break;

    // Plants category
    case "plants":
        $cat_id = 2;
        break;

    // Gift packages category
    case "packages":
        $cat_id = 3;
        break;

    // Default value
    default:
        $cat_id = null;
}

// ================= SQL QUERY =================

// Check if category exists
if($cat_id){

    // Get products by category
    $sql = "SELECT * FROM products WHERE category_id = $cat_id";

} else {

    // Get all products
    $sql = "SELECT * FROM products";
}

// Execute query
$result = $conn->query($sql);

// Create empty products array
$products = [];

// Fetch all products from database
while($row = $result->fetch_assoc()) {

    // Add product to array
    $products[] = $row;
}

?>