//membuat project baru dengan NPM
const http = require("http");
http.createServer(function (requst, response){
    response.end("Hello Server !");
}).listen(8000);
console.log("Server ini berjalan di http://localhost:8000");