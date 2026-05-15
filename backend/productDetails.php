<?php
// Include database connection file
include 'connection.php';

// Check if product ID exists in URL
if(isset($_GET['id'])) {

    // Convert ID to integer for security
    $id = intval($_GET['id']);

    // SQL query to get product data by ID
    $query = "SELECT * FROM products WHERE product_id = $id";

    // Execute query
    $result = mysqli_query($conn, $query);

    // Check if product exists
    if($row = mysqli_fetch_assoc($result)) {
        // Convert product data to JSON format
        echo json_encode($row);
    } else {
        // Return error if product is not found
        echo json_encode(["error" => "Product not found"]);
    }

} else {
    // Return error if no ID is provided
    echo json_encode(["error" => "No ID provided"]);
}
?>