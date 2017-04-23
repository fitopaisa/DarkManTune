


/* -------------------------------------- 
// * fs.readFile(file[, options], callback)
// * fs.readFileSync(file[, options])
*/

// Requiere librerias http y fs (File Sistem)
var http = require("http"),
    fs = require("fs");




// creamos servidor  esxcribimos en web la pagina leida
// por fs con el contenido de la variable html.
http.createServer(function(req,res){
    // definimos variable y llamada a el docto con fs
    // con un callback dentro para que no se detenga.
    fs.readFile("./index-callback.html", function(err,html){
        // res.writeHead(200,{"Content-Type":"text/html"}) // Tipo de texto html
        // res.writeHead(200,{"Content-Type":"text/plain"}) // Tipo de texto plano
        res.writeHead(200,{"Content-Type":"application/json"}) // Tipo de texto JSON
        res.write(JSON.stringify(html,
                            {
                            nombre: "Fitopaisa", 
                            username:"DarkMantune",
                            password:"Pasate por mi despacho"
                            }
                            ));    
        res.end();
    });   

}).listen(8090); // Escucha en el puerto 8080 





// Documentacion de Nodejs FileSsistem
// https://nodejs.org/es/docs/
// https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
