<?php
require("./env.php");
session_start();
// $u_ID = $_SESSION(['userId']);
//  if (isset($_SESSION(['userId']) )) {


$userid = 2;

// $query = "SELECT user_name ,user_pic FROM  users WHERE user_id =$_SESSION(['userId'])";
$query = "SELECT user_name ,user_pic FROM  users where user_id =$userid ";

$sql = $conn->prepare($query);
$sql->execute();

$result = $sql->execute();
if ($result) {
    $user_Data = $sql->fetch(PDO::FETCH_ASSOC);
    echo json_encode($user_Data);
}
