//1. importando modulo global HTTP
const http = require('http');

/* function requestListener(req, res) {
    Es mejor pasar como funcion anonima
}; */ 
//Request listener

//2.Creando servidor web
// preferiblemante usar arrow function
const server= http.createServer((req, res)=>{
    const url = req.url;
    /* console.log(req.url,req.method,req.headers); */
    
    /* Cerrar o salir del ciclo continuo de eventos
    process.exit(); */

    //Routing

    if (url==='/') {
        res.write('<html>');
        res.write('<head><title>My first response page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');   
        return res.end();
    }

    //Enviadno respuestas
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first response page</title></head>');
    res.write('<body><h1>Hello word<h1></body>');
    res.write('</html>');   
    res.end();
});

server.listen(4005);