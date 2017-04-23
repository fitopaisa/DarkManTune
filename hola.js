
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



// creo que es este 
// https://www.youtube.com/watch?v=wd8zf3D0jic&list=PLf3Ulvd7b1B1V5MjYiv-j-_AuhOsrV4Hx&index=2

// https://www.youtube.com/watch?v=yQdi_8nh9HE&index=12&list=PLhSj3UTs2_yVC0iaCGf16glrrfXuiSd0G#t=97.262282

// https://www.youtube.com/watch?v=nlokN2b3Z98&list=PLAAhC8kCE0VmfEPVVlhOF6qsSEIrFjvF4#t=33.246636 

// https://www.youtube.com/watch?v=Qnu8UvhpZRY&list=PLv6CkzbbGAlWV4_cT00lId5Yr63IFI3gB&index=2