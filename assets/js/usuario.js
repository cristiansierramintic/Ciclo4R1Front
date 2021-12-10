$(document).ready(function () {
    bienvenida();
});

function bienvenida() { 
    var usuario = sessionStorage.getItem("NombreUsuario");   
    $('#mensaje').html('<strong> Bienvenido Señor@' + usuario + '</strong>');
}