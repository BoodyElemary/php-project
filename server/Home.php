<?php

session_start();
require("./env.php");


if(!$_SESSION)
{
    $response = [
        "error" => true,
    ];
    echo json_encode($response);
}
else
{
    $email = $_SESSION['email'];



///////////////// get products ////////////////////////////////

$products_Query = "SELECT p.* , c.category_name FROM products p join category c on p.category_id = c.category_id where p.product_availability = 'available' ";
$user_Query = "SELECT user_name , user_pic FROM users where user_email = '$email' ";

$sql_1 = $conn->prepare($products_Query);
$sql_1->execute();
$result_1 = $sql_1->execute();

$sql_2 = $conn->prepare($user_Query);
$sql_2->execute();
$result_2 = $sql_2->execute();

if ($result_1 && $result_2 ) {
    $products = $sql_1->fetchAll(PDO::FETCH_ASSOC);
    $user = $sql_2->fetchAll(PDO::FETCH_ASSOC);
    $response = [
        "products" => $products,
        "user" => $user
    ];
    echo json_encode($response);
}
}

// session_destroy();  
