<?php


require("../env.php");

$query = "SELECT * from category";
$sql = $conn->prepare($query);
$sql->execute();
$result = $sql->execute();

if($result){
    $data = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}