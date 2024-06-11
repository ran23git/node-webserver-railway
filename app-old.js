const http = require('http'); //requiero el paquete http de node

//creo el servidor. Lo almaceno en 1 constane o uso listen

http.createServer( ( req, res )=>{  //req=request(todo lo q solicita:headers, argumentos..), res=Response(es l q el servidor respodera al cliente)
    
    //res.setHeader('Content-Disposition', 'attachment: filename=listafutbol.csv'); //esto añadira en los headers 
    //res.writeHead(200, {'Content-Type': 'application/csv'})//retorna 1 archivo csv DESCARGABLE, q es 1 archivo delimitado x comas
    
    res.write('hola racing'); 
    
    res.end();//ya termine de hacer la respuesta

    
})

.listen(8080); //"escucha" donde se ejecutara mi aplicacion

console.log('escuchando en el puerto: ', 8080);

