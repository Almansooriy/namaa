<?php
session_start();
include __DIR__ . "/connection.php";

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data["cart"]) || count($data["cart"]) === 0) {
    echo json_encode(["success" => false, "message" => "Cart is empty."]);
    exit;
}

$cart = $data["cart"];
$customer = $data["customer"] ?? [];
$customization = $data["customization"] ?? [];

$conn->begin_transaction();

try {
    foreach ($cart as $item) {
        $productId = intval($item["id"]);
        $quantity = intval($item["quantity"]);

        $stmt = $conn->prepare("SELECT name, stock FROM products WHERE product_id = ?");
        $stmt->bind_param("i", $productId);
        $stmt->execute();
        $result = $stmt->get_result();
        $product = $result->fetch_assoc();

        if (!$product) {
            throw new Exception("Product not found.");
        }

        if ($quantity > intval($product["stock"])) {
            throw new Exception($product["name"] . " has only " . $product["stock"] . " items available.");
        }

        $update = $conn->prepare("UPDATE products SET stock = stock - ? WHERE product_id = ?");
        $update->bind_param("ii", $quantity, $productId);
        $update->execute();
    }

    $_SESSION["last_order"] = [
        "cart" => $cart,
        "customer" => $customer,
        "customization" => $customization,
        "date" => date("Y-m-d H:i:s")
    ];

    $pastPurchases = [];
    if (isset($_COOKIE["nama_past_purchases"])) {
        $pastPurchases = json_decode($_COOKIE["nama_past_purchases"], true) ?: [];
    }

    foreach ($cart as $item) {
        $pastPurchases[] = [
            "name" => $item["name"],
            "quantity" => $item["quantity"],
            "date" => date("Y-m-d")
        ];
    }

    setcookie(
        "nama_past_purchases",
        json_encode($pastPurchases),
        time() + (30 * 24 * 60 * 60),
        "/"
    );

    $conn->commit();

    echo json_encode([
        "success" => true,
        "message" => "Order completed successfully."
    ]);
} catch (Exception $e) {
    $conn->rollback();

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
?>