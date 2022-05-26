//membuat web server dengan nodejs
let http = require('http'); //mengimport librari http dari node modules
let server = http.createServer(function(request, response){
    response.end("Hai, selamat datang di nodejs");
});
server.listen(8000);
console.log("Server berjalan di http://localhost:8000");