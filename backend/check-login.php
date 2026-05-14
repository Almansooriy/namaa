<?php
session_start();
include 'connection.php';

$email = trim($_POST['email']);
$password = trim($_POST['password']);

$sql = "SELECT * FROM admins WHERE email=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if($result->num_rows > 0){
    $admin = $result->fetch_assoc();

    if($password == $admin['password']){

        $_SESSION['admin_id'] = $admin['admin_id'];
        $_SESSION['admin_email'] = $admin['email'];

        session_regenerate_id(true);

        header("Location: /namaa/pages/admin/admin-dashboard.php");
        exit;

    } else {
        header("Location: /namaa/pages/admin/admin-login.php?error=1");
        exit;
    }
} else {
    header("Location: /namaa/pages/admin/admin-login.php?error=1");
    exit;
}
?>