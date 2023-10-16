<?php
header('Access-Control-Allow-Origin: http://localhost:3000'); 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'db_connection.php';
$user = json_decode( file_get_contents('php://input'));
$username=$user->username;
$password =$user->password;
//$username = $_POST['username'];
//$password = $_POST['password'];
$created_at = date('Y-m-d');
$updated_at = date('Y-m-d');
$sql = "INSERT INTO login VALUES (null,'$username', '$password','$created_at','$updated_at')"; 

if ($conn->query($sql) === TRUE)
    {
    echo "success";
    } 
    else 
    {
    echo "error";
    }

?>