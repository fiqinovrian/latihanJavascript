//fungsi dengan properti dan method
//properti adalah nilai, sedangkan method adalah fungsi dari nilai tersebut
let car = {
    type: "fiat",
    model: '500',
    color: 'white',

    //method 
    start: function(){
        console.log("Ini adalah method start");
    }, 
    drive: function(){
        console.log("Ini adalah method drive");
    },
    brake: function(){
        console.log("Ini adalah method brake");
    }, 
    stop: function(){
        console.log("Ini adalah method stop");
    }
}
console.log(car.type);
console.log(car.color);
car.start();
car.stop();
console.log("\n");

//dibawah ini menggunakan keyword this
//this digunakan untuk mengakses properti dan method dari dalam method(object)
let person = {
    firstName: "Fiqi",
    lastName: "Novrian",
    showName: function (){
        console.log(`Nama : ${this.firstName} ${this.lastName}`);
    }
}
person.showName();
console.log("\n");

//membuat class object dengan menggunakan this
console.log("Membuat class object dengan menggunakan this");
function Manusia(namaDepan, namaBelakang){
    //properti
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;

    //method 
    this.namaLengkap = function(){
        return `${this.namaDepan} ${this.namaBelakang}`;
    }
    this.tujukkanNama = function(){
        console.log(this.namaLengkap());
    }
}

let manusia1 = new Manusia("Novrian", "Fiqi"); // ini merupakan kode untuk membuat objek baru dengan kata kunci new lalu diberikan parameter. jadi mau berapapun objek yang kita inginkan tinggal tambahkan menggunakan new aja, yang penting nama variabel tidak boleh sama
manusia1.tujukkanNama();
console.log("\n");