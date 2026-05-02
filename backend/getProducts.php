<?php
include 'connection.php';

// Get category from URL
$category = isset($_GET['category']) ? $_GET['category'] : '';

// Convert category name to ID
switch($category){
    case "flowers": $cat_id = 1; break;
    case "plants": $cat_id = 2; break;
    case "packages": $cat_id = 3; break;
    default: $cat_id = null;
}

// SQL query
if($cat_id){
    $sql = "SELECT * FROM products WHERE category_id = $cat_id";
} else {
    $sql = "SELECT * FROM products";
}

$result = $conn->query($sql);

$products = [];

while($row = $result->fetch_assoc()) {
    $products[] = $row;
}
?>