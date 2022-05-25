let products = ["kopi","handphone","rokok","asbak","vape"]; //definisikan variabel products dengan array
for(let i = 0; i < products.length; i++){ //melakukan perulangan. idenya adalah definisikan terlebih dahulu variabel i, kemudian var i ini tidak lebih besar daripada jumlah value dari array products.
    console.log(products[i]);
}
console.log("\n");

//menambahkan data ke dalam array
let buah = ['apel', 'jeruk', 'semangka', 'mangga'];
console.log("Sebelum di push :");
for(j=0; j< buah.length; j++){
    console.log(buah[j]);
}
console.log("\n");

buah.push('manggis');
console.log("Setelah di Push :");
for(let k=0; k < buah.length; k++){
    console.log(buah[k]);
}
console.log("\n");

//menghapus data pada array
console.log("Setelah di hapus menggunakan POP:");
buah.pop(); //pop ini menghapus data dari urutan belakang / array paling belakang
for(let k=0; k < buah.length; k++){
    console.log(buah[k]);
}
console.log("\n");

console.log("Setelah di hapus menggunakan SHIFT :");
buah.shift(); //shift ini menghapus data dari urutan depan
for(let k=0; k < buah.length; k++){
    console.log(buah[k]);
}
console.log("\n");

let alat = ['lensa','body','flash','memory card'];
console.log("Sebelum dihapus :");
for(let k = 0; k < alat.length; k++){
    console.log(alat[k]);
}
console.log("\n");
console.log("Setelah dihapus menggunakan SPLICE :");
alat.splice(1, 1); //ada 2 parameter jika menggunakan splice, yaitu array keberapa yang akan dihapus, pada kasus ini misalnya akan menghapus data array ke 1 yaitu body, total yang dihapus biasanya diisi dengan 1 jika ingin menghapus 1 data saja
for(let k = 0; k < alat.length; k++){
    console.log(alat[k]);
}
console.log("\n");

//mengubah isi array
let arrayBaru = ['laptop','monitor','mouse'];
console.log("Sebelum dirubah array baru :");
for(i = 0; i<arrayBaru.length; i++){
    console.log(arrayBaru[i]);
}
console.log("\n");
console.log("Setelah dirubah. Dalam hal ini value yang akan dirubah adalah MOUSE akan diganti menjadi KEYBOARD :");
arrayBaru[2] = "Keyboard";
for(i = 0; i < arrayBaru.length; i++){
    console.log(arrayBaru[i]);
}
console.log("\n");
