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

$nombre_completo = $_POST['nombre_completo'];
$cargo = $_POST['cargo'];
$email = $_POST['email'];
$empresa = $_POST['empresa'];
$tel_celular = $_POST['tel_celular'];
$tel_numero = $_POST['tel_numero'];
$extension = $_POST['extension'];
$estado = $_POST['estado'];
$municipio = $_POST['municipio'];
$planes = $_POST['planes'];

$destinatario = 'marketing.digital@kualidigital.com, test@kualidigital.com';
$asunto = 'Formulario de Contacto Empresarial';
$cuerpo = "Nombre: $nombre_completo\Cargo: $cargo\nEmail: $email\nEmpresa: $empresa\Teléfono Celular: $tel_celular\Número Teléfono: $tel_numero\nExtension: $extension\nEstado: $estado\nMunicipio: $municipio\nPlan: $planes";
$headers = "From: $planes\r\nReply-To: $planes\r\n";

mail($destinatario, $asunto, $cuerpo, $headers);

/*header('Location: contacto-soporte.html');*/
echo "<script type='text/javascript'>alert('Gracias por escribirnos. Uno de nuestros especialistas se pondrá en contacto contigo.');location='index.html';</script>";
