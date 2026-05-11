<?php
$host = "localhost";
$user = "root";
$password = "ALmansoor*12";
$dbname = "namaa";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>