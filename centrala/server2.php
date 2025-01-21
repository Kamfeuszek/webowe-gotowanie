<?php

$json = file_get_contents($dir . DIRECTORY_SEPARATOR . $file . '.json');

$obj = json_decode($json);

if($obj->switches->{$_POST['id']}->switchStatus == "on") {
    $obj->switches->{$_POST['id']}->switchStatus = "off";
} else {
    $obj->switches->{$_POST['id']}->switchStatus = "on";
}

file_put_contents($dir . DIRECTORY_SEPARATOR . $file . '.json', json_encode($obj));
	$json = file_get_contents($dir . DIRECTORY_SEPARATOR . $file . '.json');

	echo $json;
?>