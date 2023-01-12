<?php

require("./env.php");



///////////////// get products ////////////////////////////////
$sql = 'mysql:host=localhost;dbname=cafeteriadb';
$conn = new PDO($sql, 'root', '1234');

$query = "SELECT p.* , c.category_name FROM products p join category c on p.category_id = c.category_id where p.product_availability = 'available' ";
// $query = "INSERT INTO products VALUES ('$new_name')";
$sql = $conn->prepare($query);
$sql->execute();
$result = $sql->execute();

if ($result) {
    $product = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($product);
}
// print_r($product);

// echo "dddddddddddddddddddd";


?>