<?php

include '../../Objects/Query.php';

$ab = new Query();

if (
    !empty($_POST['name-input'])
    && !empty($_POST['contact-number'])
    && !empty($_POST['email-input'])
) {

     $ab->update($_POST['edit-val-id-pass'],[
        'name' => $_POST['name-input'],
        'phone' => $_POST['contact-number'],
        'email' => $_POST['email-input']
    ]);

    return 'true';
}

return 'false';
