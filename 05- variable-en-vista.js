/* -------------------------------------- 
* fs.readFile(file[, options], callback)
* fs.readFileSync(file[, options])
*/

// Requiere librerias http y fs (File Sistem)
var http = require("http"),
    fs = require("fs");


// creamos servidor  esxcribimos en web la pagina leida
// por fs con el contenido de la variable html.
http.createServer(function(req,res){    
    fs.readFile("./index-vistas.html", function(err,html){
        var html_string = html.toString();

        // expresion regular para buscar cadenas de texto entre corchetes {x}
        // html_string.match(/[^\{\}]+(?=\})/g)
        // html_string.match = ["nombre"],["telefono"],["inversion"],["parrafo"]
        // 
        var variables = html_string.match(/[^\{\}]+(?=\})/g); // retorna las variables
        var nombre = "DarkManTune";
        var telefono = "+346511447";
        var inversion = 250;
        var parrafo =   "Parrafo generado por JavaScrip , esto es un acadena de texto. <br>"+
                        "Puedo meter un retorno de carro en mitad de un parrafo y concatenar.";
        // variable ['nombre']
        for (var i = variables.length - 1; i >= 0; i--) {
            // lo ejecutamos como codido de javascript
            // para obtener el valor de la variable, en un bucle asi la variable sera una array.
            var value = eval(variables[i]);

            // reemplaza el contenido entre llaves por su valor.
            // reemplaza {nombre} por "DarMantune"...
            // 
            html_string = html_string.replace("{"+variables[i]+"}",value);
        };

        // mandamos el contenido
        res.writeHead(200,{"Content-Type":"text/html"}) // Tipo de texto JSON
        res.write(html_string);    
        res.end();
    });
}).listen(8090); // Escucha en el puerto 8080 





// Documentacion de Nodejs FileSsistem
// https://nodejs.org/es/docs/
// https://nodejs.org/dist/latest-v6.x/docs/api/fs.html
