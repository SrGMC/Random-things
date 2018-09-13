<?php
if(!empty($_POST['data']) && !empty($_POST['user'])){
    $json = $_POST['data'];
    $user = $_POST['user'];
}

$filename = "users/".$user.".json";
if(!file_exists($filename)){
    $file = fopen($filename, "w") or die("Unable to open file");
    fwrite($file, $json);
    fclose($file);
}
?>