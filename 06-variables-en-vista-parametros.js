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
        // si hay peticion favicon retorna  
        if (req.url.indexOf("favicon.ico") > 0 ) { return; }
        
        console.log("_______________________________________");
        console.log(req); // manda a consola la peticion.

        console.log("---------------------------------------");
        console.log("Servidor corriendo"); // manda a consola la peticion.
        console.log("owner: Adolfo Andrino Sanchez");
        console.log("Copyright: fitopaisa@hotmail.com");
        console.log("_______________________________________");

    fs.readFile("./06-variables-en-vista-parametros.html", function(err,html){
        var html_string = html.toString();
        var arreglo_parametros = [], parametros = {};
        var variables = html_string.match(/[^\{\}]+(?=\})/g); // retorna las variables
        var nombre = "DarkMan";

       if(req.url.indexOf("?") > 0 ){
           // nombre /?darkman
           // /?nombre=darkman => ['/' , 'nombre=darkman']
           var url_data = req.url.split("?");
           var arreglo_parametros = url_data[1].split("&");
           // nombre
       };

       for (var i = arreglo_parametros.length - 1; i >= 0; i--) {            
            var parametro = arreglo_parametros[i];
            // nombre=darkman
            var param_data = parametro.split("=");
            // [nombre,darkman]
            parametros[param_data[0]] = param_data[1];
            // {nombre: darkman}
           };
        
        for (var i = variables.length - 1; i >= 0; i--) {            
            var variable = variables[i];
            // var value = eval(variables[i]);
            html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
        };
        // mandamos el contenido
        res.writeHead(200,{"Content-Type":"text/html"}) // Tipo de texto JSON
        res.write(html_string);    
        res.end();
    });
}).listen(8090); // Escucha en el puerto 8080 

