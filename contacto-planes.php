<?php

if (isset($_POST['submitForm'])) {
    $captcha_response = true;
    $recaptcha = $_POST['g-recaptcha-response'];

    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array(
        'secret' => '',
        'response' => $recaptcha
    );
    $options = array(
        'http' => array(
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $verify = file_get_contents($url, false, $context);
    $captcha_success = json_decode($verify);
    $captcha_response = $captcha_success->success;

    if ($captcha_response) {
        echo '<p class="alert alert-success">Procesar datos...</p>';
    } else {
        echo '<p class="alert alert-danger">Debes indicar que no eres un robot.';
    }
}

header('Content-Type: text/html; charset=UTF-8');

$name = $_POST['name'];
$planes = $_POST['planes'];
$tel_uno = $_POST['tel_uno'];
$tel_dos = $_POST['tel_dos'];
$estado = $_POST['estado'];
$municipio = $_POST['municipio'];
$colonia_localidad = $_POST['colonia_localidad'];
$codigo_postal = $_POST['codigo_postal'];
$aviso_privacidad = $_POST['aviso_privacidad'];

$destinatario = 'marketing.digital@kualidigital.com, test@kualidigital.com';
$asunto = 'Formulario Contratacion de Planes';
$cuerpo = "Nombre: $nombre_completo\nPlanes: $planes\nCelular: $tel_uno\nOtro Telefono: $tel_dos\Estado: $estado\nMunicipio: $municipio\nColonia o Localidad: $colonia_localidad\nCodigo Postal: $codigo_postal\nAviso de Privacidad: $aviso_privacidad";
$headers = "From: $planes\r\nReply-To: $planes\r\n";

mail($destinatario, $asunto, $cuerpo, $headers);

/*header('Location: contacto-soporte.html');*/
echo "<script type='text/javascript'>alert('Gracias por escribirnos. Uno de nuestros especialistas se pondrá en contacto contigo.');location='index.html';</script>";
