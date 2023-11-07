<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="favicon.ico">
<title>Llenar select HTML con MySQL PHP: Ejemplos - BaulPHP</title>

<link href="dist/css/bootstrap.min.css" rel="stylesheet">

<link href="assets/sticky-footer-navbar.css" rel="stylesheet">
</head>

<body>
<header> 

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> <a class="navbar-brand" href="#">BaulPHP</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
<div class="collapse navbar-collapse" id="navbarCollapse">
<ul class="navbar-nav mr-auto">
<li class="nav-item active"> <a class="nav-link" href="index.php">Inicio <span class="sr-only">(current)</span></a> </li>
</ul>
<form class="form-inline mt-2 mt-md-0">
<input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search">
<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Busqueda</button>
</form>
</div>
</nav>
</header>


<div class="container">
<h3 class="mt-5"><a href="" target="_blank">Llenar select HTML con MySQL PHP</a></h3>
<hr>
<div class="row">
<div class="col-12 col-md-12"> 


<?php
$usuario = 'root';
$password = '#Admin01#';
$db = new PDO('mysql:host=localhost;dbname=php_llenarselect', $usuario, $password);
?>
<div align="left">
<p>Seleccione un pais del siguiente menú:</p>
<form class="form-inline">
<div class="form-group mb-2">
<label for="staticEmail2">Paises:</label>
</div>
<div class="form-group mx-sm-3 mb-2">
<label for="paises" class="sr-only">Paises:</label>
<select class="form-control" >
<option value="">Seleccione:</option>
<?php
$query = $db->prepare("SELECT * FROM paises");
$query->execute();
$data = $query->fetchAll();

foreach ($data as $valores):
echo '<option value="'.$valores["id"].'">'.$valores["paises"].'</option>';
endforeach;
?>
</select>
</div>
<button class="btn btn-primary mb-2">Enviar</button>
</form>
</div>

</div>
</div>


</div>

<footer class="footer">
<div class="container"> <span class="text-muted">
<p>Códigos <a href="" target="_blank">BaulPHP</a></p>
</span> </div>
</footer>
<script src="assets/jquery-1.12.4-jquery.min.js"></script>

<script src="dist/js/bootstrap.min.js"></script>
</body>
</html>