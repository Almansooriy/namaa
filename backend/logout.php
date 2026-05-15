<?php

// Start session
session_start();

// Remove all session variables
$_SESSION = [];

// Destroy current session
session_destroy();

// Redirect admin to login page
header("Location: ../pages/admin/admin-login.php");

// Stop script execution
exit;

?>