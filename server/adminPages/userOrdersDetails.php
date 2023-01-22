<?php 
require_once ('../env.php');
session_start();
if (!array_key_exists("admin",$_SESSION))
{  
    $notAuthorized = [
        "notAuthorized"=>true
    ];
    echo json_encode($notAuthorized);

} else {
    $ID = json_decode(file_get_contents("php://input"), true)['user_id'];

    $query = "SELECT orders.order_id, orders.order_date, orders.total, orders.notes from orders where user_id = $ID";
    $sql = $conn->prepare($query);
    $result = $sql->execute();
    $data = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}