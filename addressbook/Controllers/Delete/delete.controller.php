<?php

include '../../Objects/Query.php';

$ab = new Query();

var_dump($_POST);

if (!empty($_POST['idref'])) {
    return $ab->delete($_POST['idref']);
}