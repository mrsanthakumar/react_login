<?php
header('Access-Control-Allow-Origin: http://localhost:3000'); 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

session_start();
include 'db_connection.php';
$user = json_decode( file_get_contents('php://input'));
$username=$user->username;
$password =$user->password;
//$username = $_POST['username'];
//$password = $_POST['password'];

$sql = "SELECT * FROM login WHERE username='$username' and password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
$_SESSION['username'] = $username;
echo "success";
} else {
echo "error";
}
?>