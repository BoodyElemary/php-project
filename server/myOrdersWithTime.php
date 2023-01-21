<?php 
require('./env.php');
session_start();
$request = json_decode(file_get_contents("php://input"), true);
$dateFrom = $request['dateFrom'];
$dateTo = $request['dateTo'];
$ID = 2;
$query = "SELECT orders.order_id, orders.order_date, orders.total,orders.order_status, orders.notes from orders where user_id = $ID AND date(orders.order_date) between '$dateFrom' AND '$dateTo' ";

$sql = $conn->prepare($query);
$result = $sql->execute();
$data = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
