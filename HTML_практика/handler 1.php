<?php
	$login= $_GET['a'];
	$password= $_GET['b'];
           db_insert('DB_table')->fields(array('Login' => $login, 'Password' => $password))->execute();
?>

 
