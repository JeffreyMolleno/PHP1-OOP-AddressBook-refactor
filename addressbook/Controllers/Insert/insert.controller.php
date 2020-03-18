<?php

include '../../Objects/Query.php';

$ab = new Query();

if (
    !empty($_POST['name-input'])
    && !empty($_POST['contact-number'])
    && !empty($_POST['email-input'])
) {

    $lastid = $ab->insert([
        'name' => $_POST['name-input'],
        'phone' => $_POST['contact-number'],
        'email' => $_POST['email-input']
    ]);

    echo "
        <tr>
            <th id='name'>".$_POST['name-input']."</th>
            <th id='phone'>".$_POST['contact-number']."</th>
            <th id='email'>".$_POST['email-input']."</th>
            <th>
            <button
                data-id=".$lastid."
                type='button'
                class='edit-btn btn btn-success'
                data-toggle='modal'
                data-target='#update-modal'
            >UPDATE
            </button>
            <button
                data-id=".$lastid."
                type='button'
                class='delete-btn btn btn-danger'
            >
                DELETE
            </button>
            </th>
        </tr>
    ";
}
