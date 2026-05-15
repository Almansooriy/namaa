<?php

// Start session to store admin login data
session_start();

// Include database connection file
include 'connection.php';

// Get email and password from login form
$email = trim($_POST['email']);
$password = trim($_POST['password']);

// SQL query to search for admin by email
$sql = "SELECT * FROM admins WHERE email=?";

// Prepare SQL statement
$stmt = $conn->prepare($sql);

// Bind email parameter safely
$stmt->bind_param("s", $email);

// Execute query
$stmt->execute();

// Get query result
$result = $stmt->get_result();

// Check if admin exists
if($result->num_rows > 0){

    // Fetch admin data
    $admin = $result->fetch_assoc();

    // Check if password is correct
    if($password == $admin['password']){

        // Store admin ID in session
        $_SESSION['admin_id'] = $admin['admin_id'];

        // Store admin email in session
        $_SESSION['admin_email'] = $admin['email'];

        // Regenerate session ID for security
        session_regenerate_id(true);

        // Redirect to admin dashboard
        header("Location: /namaa/pages/admin/admin-dashboard.php");
        exit;

    } else {

        // Redirect back if password is wrong
        header("Location: /namaa/pages/admin/admin-login.php?error=1");
        exit;
    }

} else {

    // Redirect back if email not found
    header("Location: /namaa/pages/admin/admin-login.php?error=1");
    exit;
}

?>