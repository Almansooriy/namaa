<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


include __DIR__ . "/connection.php";

header("Content-Type: application/json");

if (!isset($_GET['id'])) {
    echo json_encode(["error" => "No ID"]);
    exit;
}

$id = intval($_GET['id']);

$query = "SELECT * FROM products WHERE product_id = $id";
$result = mysqli_query($conn, $query);

if (!$result) {
    echo json_encode([
        "error" => "SQL Error",
        "details" => mysqli_error($conn)
    ]);
    exit;
}

$row = mysqli_fetch_assoc($result);

if (!$row) {
    echo json_encode(["error" => "Not found"]);
    exit;
}

echo json_encode($row);