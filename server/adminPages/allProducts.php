<?php 
require('../env.php');
session_start();
$query = "SELECT * FROM products";
$sql = $conn->prepare($query);
$result = $sql->execute();
$data = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
