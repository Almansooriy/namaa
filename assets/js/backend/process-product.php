<?php
include 'connection.php';

$mode = $_POST['mode'];

$name = $_POST['name'];
$price = $_POST['price'];
$description = $_POST['description'];
$stock = $_POST['stock'];
$image = $_POST['image'];
$category = $_POST['category'];

if($mode == "add"){
    $sql = "INSERT INTO products (name, price, description, stock, image, category_id)
            VALUES ('$name', '$price', '$description', '$stock', '$image', '$category')";
}

if($price < 0 || $stock < 0){
    echo "Invalid input";
    exit;
}
if($mode == "edit"){
    $id = $_POST['id'];
    $sql = "UPDATE products SET
            name='$name',
            price='$price',
            description='$description',
            stock='$stock',
            image='$image',
            category_id='$category'
            WHERE id=$id";
}

if($mode == "delete"){
    $id = $_POST['id'];
    $sql = "DELETE FROM products WHERE id=$id";
}

$conn->query($sql);

header("Location: /Namaa/pages/admin/admin-dashboard.php");
?>