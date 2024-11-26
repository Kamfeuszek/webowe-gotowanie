<?php

if(isset($_POST))
{
	var_dump($_POST);
	$file = $_POST['jsonFile'];
	$json = file_get_contents($file . '.json');

	if(isset($_POST['id']))
	{
		$id = $_POST['id'];
		$status = $_POST['status'];
		$name = $_POST['name'];
		$obj = json_decode($json);
		$obj->switches->{$id}->switchID = (int)$id;
        $obj->switches->{$id}->name = $name;
        $obj->switches->{$id}->switchStatus = $status;
		
		
		file_put_contents($file . '.json', json_encode($obj));
		$json = file_get_contents($file . '.json');
	}
	echo $json;
}

?>