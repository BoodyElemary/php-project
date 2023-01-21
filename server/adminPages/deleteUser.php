<?php 
require('../env.php');
session_start();
$ID = json_decode(file_get_contents("php://input"), true)['userId'];

$query = "DELETE from users where user_id = $ID";
$sql = $conn->prepare($query);
$result = $sql->execute();
if($result){
    echo json_encode(["success"=>true]);
}

