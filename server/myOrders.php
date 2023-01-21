<?php 
require_once ('./env.php');
$ID = 2;

$query = "SELECT orders.order_id, orders.order_date, orders.total,orders.order_status, orders.notes from orders where user_id = $ID";
$sql = $conn->prepare($query);
$result = $sql->execute();
$data = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
