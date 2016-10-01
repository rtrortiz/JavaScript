<?php
 //echo "hello";
if (isset($_POST['name']) === true && empty($_POST['name']) === false) {
	require '../core/db/connect.php';

	//$name = $_POST['name'];
	//echo $name;
	$query = mysql_query("
		SELECT `users`.`last_name`
		FROM `users`
		WHERE `users`.`first_name` = '" . mysql_real_escape_string(trim($_POST['name'])) . "'

		");

	echo (mysql_num_rows($query) !== 0) ? mysql_result($query, 0 , 'last_name') : 'Name not found';
}

?>
 