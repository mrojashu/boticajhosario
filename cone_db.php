<?php 

	error_reporting(E_ALL);
	ini_set('display_errors', 'On');

	$host="localhost";
	$user="siperu_uapseqp06";
	$pass="UAEquipo06";
	$database="siperu_uapseqp06";

	$db = new mysqli($host,$user,$pass,$database);

//	if ($db -> connect_errno){
//		die("fallo en conecion a mysql: (" .$db -> mysqli_connect_errno(//)
//			. ")" .$db -> mysqli_connect_error()
//		);
//	}
//	mysqli_set_charset($db,'utf8');
//
//	if($db){
//		echo "conexion exitosgfda";
//	}
//	else{
//		"fallo";
//	}

 ?>