<?php

const INVALID_REQUEST_METHOD = 1;
const EMAIL_IS_REQUIRED = 2;
const NAME_IS_REQUIRED = 3;
const INVALID_EMAIL_FORMAT = 4;
const INVALID_EMAIL_DATA = 5;
header('Content-Type: application/json');

try {

    $decoded = json_decode(file_get_contents('php://input'), true);

    if (!is_array($decoded)){
        $decoded = json_decode($decoded, true);
    }

    $sanitizedData = sanitize($decoded);
    validate($sanitizedData);

    $name = $sanitizedData['name'];
    $email = $sanitizedData['email'];
    $localisation = $sanitizedData['localisation'];
    $budget = $sanitizedData['budget'];
    $tel = $sanitizedData['tel'];
    $field = $sanitizedData['field'];
    $secondHand = ($sanitizedData['firstHand'] && $sanitizedData['secondHand']) ? " i wtórny" : ($sanitizedData['secondHand'] ? "Wtórny" : "");
    $firstHand = $sanitizedData['firstHand'] ? "Pierwotny" : "";

    $message = generateMessage($firstHand, $secondHand, $localisation, $field, $budget, $name, $email, $tel);

    $fromApp = "aplikacja@lokalemieszkalne.eu";
    $toTarget = "kontakt@lokalemieszkalne.eu";
    $subject = "Zapytanie o ofertę lokali";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $headers .= 'From: ' . $fromApp . "\r\n";

    mail($toTarget, $subject, $message, $headers);

    echo json_encode(['status' => 'success']);

} catch (Exception $e) {

    echo json_encode(['status' => 'error']);
    echo $e->getCode();
}

function sanitize($mailData)
{
    if ($mailData == null) {
        return null;
    }
    $trimmedData = [];
    $trimmedData['email'] = filter_var($mailData['email'], FILTER_SANITIZE_EMAIL);

    foreach ($mailData as $key => $value) {
        $trimmedData[$key] = trim($value);

    }
    return $trimmedData;
}

function validate($sanitizedData)
{
    if ($sanitizedData == null) {
        throw new Exception("Invalid email content", 5);
    }

    $exceptionMessage = 'Validation failed.';

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception($exceptionMessage, 1);
    }

    if ($sanitizedData['email'] === '') {
        throw new Exception($exceptionMessage, 2);
    }

    if ($sanitizedData['name'] === '') {
        throw new Exception($exceptionMessage, 3);
    }

    if (!filter_var($sanitizedData['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception($exceptionMessage, 4);
    }
}

function generateMessage($firstHand, $secondHand, $localisation, $field, $budget, $name, $email, $tel)
{
    $message = sprintf("<html xmlns=\"http://www.w3.org/1999/html\">
        <head>
        <title>Zapytanie o ofertę lokali</title>
        </head>
        <body>
            <h3>Zapytanie o aktualną ofertę dotyczącą lokali</h3>
            <hr>
                <p><strong>Rynek:</strong> %s %s</p>
                <p><strong>Lokalizacja:</strong> %s</p>
                <p><strong>Powierzchnia:</strong> %s m&sup2;</p>
                <p><strong>Maksymalny budżet:</strong> %s zł</p>
                <p><strong>Kontakt do klienta:</strong> %s 
                 </br>email: %s
                 </br>tel: %s</p>
                 <hr>
                 <p><small>Wiadomość wysłana przez formularz ze strony http://lokalemieszkalne.eu/</small></p>
        </body>
        </html>", $firstHand, $secondHand, $localisation, $field, $budget, $name, $email, $tel);
    return $message;
}