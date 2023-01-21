<?php
require("../env.php");
// session_start();
// $adminId=$_SESSION(['aminId']);
$adminId = 1;
$query = "SELECT admin_name ,admin_pic from admins where admin_id =$adminId";
$sql = $conn->prepare($query);
$result = $sql->execute();
// echo ($result);
if ($result) {
    $admin_Data = $sql->fetch(PDO::FETCH_ASSOC);
    echo json_encode($admin_Data);
} else {
    echo json_encode(["Error => Check your Connection"]);
}