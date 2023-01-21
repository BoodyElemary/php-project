<?php 
require('../env.php');
session_start();
$ID = json_decode(file_get_contents("php://input"), true)['product_id'];

$query = "DELETE from products where product_id = $ID";
$sql = $conn->prepare($query);
$result = $sql->execute();
if($result){
    echo json_encode(["success"=>true]);
}

