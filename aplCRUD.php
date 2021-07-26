<?php
header('Content-Type: application/json');
$string = file_get_contents("GetSinta.json");

// json_decode($string);
echo $string;
?>