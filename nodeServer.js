//memodifikasi response body dan header
// const http = require('http');
// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write("Hello World");
//     response.end();
// }).listen(8000);
// console.log("Server berjalan di http://localhost:8000");

/*memodifikasi response menjadi application json */
// const http = require('http');
// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-type' : 'application/json'}); //kode 200 merupakan kode repson yang artinya respon yang bagus
//     response.write('{"message" : "Hello World"}');
//     response.end();
// }).listen(8000);

// console.log("Server berjalan di http://localhost:8000");

/*mengambil URL untuk routing */
// const http = require('http');
// http.createServer(function (request, response){
//     response.writeHead(200, {'Content-type' : 'text/html'});
//     response.write('URL :' + request.url);
//     response.end();
// }).listen(8000);
// console.log("Server berjalan di http://localhost:8000");

/* membuat case menampilkan tulisan berdasarkan route atau link yang di tuliskan di address bar */
const http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-type' : 'text/html'});
    switch(request.url){
        case '/about':
            response.write("Ini merupakan halaman about");
            break;
        case '/profile':
            response.write("Ini merupakan halaman profile");
            break;
        case '/produk':
            response.write("Ini adalah halaman produk");
            break;
        default:
            response.write("404 Halaman tidak ditemukan");
    }
    response.end();
}).listen(8000);
console.log("Server berjalan di http://localhost: 8000");