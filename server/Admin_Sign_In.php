<?php
session_start();

require("./env.php");



if(isset($_POST['email']))
{

    /// RECIEVING DATA ////////////////////////////
    $email = $_POST["email"];
    $password = $_POST["password"];	
    
    //// VALIDATIONS ///////////////////////////////
    $emailregx = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
if(!preg_match($emailregx,$email))
    {
        $outMsg = "Invalid E-mail";
        echo json_encode(["error" => true, "msg" => "$outMsg"]);
    }
    else if(strlen($password)<8)
    {
        $outMsg = "Invalid Password";
        echo json_encode(["error" => true, "msg" => "$outMsg"]);
    }
    else
    {
        ///// RETRIEVING FROM DATABASE ////////////////////////////
        $query = "SELECT admin_password FROM admins WHERE admin_email = '$email'; ";
        $sql = $conn->prepare($query);
        $sql->execute();
        $result = $sql->execute();

        if ($result) {
            
            $admins = $sql->fetch();

            if ($admins) 
            {
                if ($admins["admin_password"] === $password)
                {
                    $_SESSION['email'] = $email;
                    echo json_encode(
                        ["status"=>true]
                    );
                }
                else
                {
                    $outMsg = "Invalid password";
                    echo json_encode(["error" => true, "msg" => "$outMsg"]);  
                }
            } 
            else 
            {
                $outMsg = "Invalid E-mail";
                echo json_encode(["error" => true, "msg" => "$outMsg"]);
            }
        }
        
    }
}


?>