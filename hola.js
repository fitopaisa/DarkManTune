
// Requiere - libreria http
var http = require("http");

// Funcion salida, entrada
var manejador = function(solicitud, respuesta){
    console.log("Servidor corriendo");

    respuesta.end("Respuesta del servidor a la web");    
}

// la direcion y cuerto qeu vamos a usar. 
var servidor = http.createServer(manejador);
servidor.listen(8080); // escucha en el puerto 8080



