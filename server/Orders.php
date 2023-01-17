<?php

require("./env.php");



///////////////// get products ////////////////////////////////
$sql = 'mysql:host=localhost;dbname=cafeteriadb';

$query = "SELECT u.user_name , o.room_no , o.order_date ,o.order_status , o.total , op.quantity , p.product_name , p.product_picture , p.product_price 
FROM orders o join users u on o.user_id = u.user_id join orderedproducts op on o.order_id = op.order_id join products p on op.product_id = p.product_id";
$sql = $conn->prepare($query);
$sql->execute();
$result = $sql->execute();

if ($result) {
    $product = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($product);
}
// print_r($product);

// echo "dddddddddddddddddddd";