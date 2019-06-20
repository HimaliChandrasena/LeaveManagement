<?php
include("db.php");
?>
<?php
session_start();
clearstatcache();
if($connect){
    $messeage = "Connected";
    $MSGJSon = json_encode($messeage);
    echo $MSGJSon;
}else{
    $messeage = "Not Connected";
    $MSGJSon = json_encode($messeage);
    echo $MSGJSon;
}
// if (isset($_SESSION['id'])) {
//     $InvalidMSG = 'session is set';
//     $user_email = $_SESSION['email'];
//     $detail_arr = array();
//     array_push($detail_arr, $user_email, $InvalidMSG);   
//     $InvalidMSGJSon = json_encode(array('results' => $detail_arr));
//     echo $InvalidMSGJSon;
// } else {
//     $json = file_get_contents('php://input');
//     $obj = json_decode($json, true);
//     $email = $obj['email'];
//     $password = $obj['password'];
//     $sql = "SELECT * FROM users WHERE email = '" . $email . "'";
//     $result_set = mysqli_query($connect, $sql);
//     $result = mysqli_fetch_array($result_set);
//   //  if ($email !== '') {
//     //    if ($password !== '') {
//             if ($password == $result['UserPassword']) {
//                 $_SESSION['id'] = $result['UserID'];
//                 $_SESSION['email'] = $email;
//                 $SuccessLoginMsg = 'Data Matched';
//                 $detail_arr = array();
//                 array_push($detail_arr, $_SESSION['email'], $SuccessLoginMsg);   
//                 // Converting the message into JSON format.
//                 $SuccessLoginJson = json_encode(array('results' => $detail_arr));
//                 // Echo the message.
//                 echo $SuccessLoginJson;
				
//             } else {
//                 $user_email = "";
//                 // If the record inserted successfully then show the message.
//                 $InvalidMSG = 'Invalid Username or Password Please Try Again';
//                 $detail_arr = array();
//                 array_push($detail_arr, $user_email, $InvalidMSG);
//                 // Converting the message into JSON format.
//                 $InvalidMSGJSon = json_encode(array('results' => $detail_arr));
//                 // Echo the message.
//                 echo $InvalidMSGJSon;
//             }
// 			/*
			
//         } else {
//             $user_email = "";
//             // If the record inserted successfully then show the message.
//             $InvalidMSG = 'Password is required';
//             $detail_arr = array();
//             array_push($detail_arr, $user_email, $InvalidMSG);
//             // Converting the message into JSON format.
//             $InvalidMSGJSon = json_encode(array('results' => $detail_arr));
//             // Echo the message.
//             echo $InvalidMSGJSon;
//         }
//     } else {
//         $user_email = "";
//         // If the record inserted successfully then show the message.
//         $InvalidMSG = 'Username is required';
//         $detail_arr = array();
//         array_push($detail_arr, $user_email, $InvalidMSG);
//         // Converting the message into JSON format.
//         $InvalidMSGJSon = json_encode(array('results' => $detail_arr));
//         // Echo the message.
//         echo $InvalidMSGJSon;
//     }
// 	*/
//}
?>