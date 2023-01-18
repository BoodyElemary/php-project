<?php

require("./env.php");


///////////////// get products ////////////////////////////////
$sql = 'mysql:host=localhost;dbname=cafeteriadb';

//------ getting ifo of orderss
$order_query = "SELECT u.user_name , o.room_no , o.order_date ,o.order_status , o.total , count(op.product_id) as no_products
 FROM orders o join users u on o.user_id = u.user_id join orderedproducts op on o.order_id = op.order_id
  join products p on op.product_id = p.product_id join category c on p.category_id = c.category_id group by o.order_id order by o.order_id;";
 
 // ------ getting info of ordered products
$product_query = "SELECT  op.quantity , p.product_name , p.product_picture , p.product_price , c.category_name
FROM orders o join users u on o.user_id = u.user_id join orderedproducts op on o.order_id = op.order_id 
join products p on op.product_id = p.product_id join category c on p.category_id = c.category_id order by o.order_id;";

$sql = $conn->prepare($order_query);
$sql->execute();
$result = $sql->execute();
$orders = $sql->fetchAll(PDO::FETCH_ASSOC);

$sql = $conn->prepare($product_query);
$sql->execute();
$result = $sql->execute();
$products = $sql->fetchAll(PDO::FETCH_ASSOC);

//------ creating array that hold all
$all=[
    "orders"=>$orders,
    "products"=>$products
];



//----------- sending response
if ($result) {
    echo json_encode($all);
}
else 
{
    $error = [
        "error"=>true
    ];
    echo json_encode($error);
}

