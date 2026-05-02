<?php
session_start();
include 'connection.php';

$username = trim($_POST['username']);
$password = trim($_POST['password']);

$sql = "SELECT * FROM admins WHERE username=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();

if($result->num_rows > 0){
    $admin = $result->fetch_assoc();

    if($password == $admin['password']){

        $_SESSION['admin_id'] = $admin['admin_id']; // ✅ مهم
        $_SESSION['admin_name'] = $admin['username'];

        session_regenerate_id(true);

        header("Location: /Namaa/pages/admin/admin-dashboard.php");
        exit;

    } else {
        header("Location: /Namaa/pages/admin/admin-login.php?error=1");
        exit;
    }
} else {
    header("Location: /Namaa/pages/admin/admin-login.php?error=1");
    exit;
}
?>