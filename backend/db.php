<?php

$host = "localhost";
$uname = "id9995820_leave";
$pwd = "leave";
$dbName = "id9995820_leave_management";

$connect = mysqli_connect($host, $uname, $pwd, $dbName);
if($connect){
    echo "Connn";
}else{
    echo "Not";
}
?>