<?php
require("../env.php");
$query = "SELECT * from users";
$sql = $conn->prepare($query);
$result = $sql->execute();
if ($result) {

    $user = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($user);
} else {
    echo json_encode(["Error" => "check Your Connection"]);
}
