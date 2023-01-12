<?php

//////////////// DB connection //////////////////////////////

try {
		$conn = new PDO("mysql:host=localhost;dbname=cafeteriadb",'root', '1234');
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		// echo "Connected successfully";
	} catch(PDOException $e) {
		// echo "Connection failed: " . $e->getMessage();
	}
		
?>