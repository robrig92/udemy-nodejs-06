const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' })
        let response = {
            nombre: 'Roberto Padilla',
            edad: 28,
            url: req.url
        };
        res.write(JSON.stringify(response));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');