<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

header('Content-Type: text/html; charset=utf-8');

    $subject = 'Новая заявка! - '.$_SERVER['HTTP_REFERER'];
    $addressat = 'pettrushkov@gmail.com';
    $message = "Имя: $name\nТелефон: $phone";  
    $verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n"); ?>