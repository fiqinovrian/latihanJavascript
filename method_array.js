//method filter. untuk menyaring data array
const angka = [1,2,3,4,5,6,7,8,9,10];
//idenya adalah mengambil data angka yang genap / habis dibagi 2
const filterArray = angka.filter((item) => {
    return item % 2 === 0
});
console.log(filterArray);
console.log("\n");
//bentuk sederhananya adalah seperti ini 
const filterArray2 = angka.filter(item => item %2 === 0);
console.log(filterArray2);
console.log("\n");

//method includes untuk cek data, agar tidak terjadi redudansi data
// let barang = ['rokok','liquid','kopi','mouse'];
// //melakukan cek data dengan menggunakan includes
// let cekBarang = barang.includes('rokok');
// if(cekBarang == true){
//     console.log("barang sudah ada");
// } else {
//     console.log("Barang belum ada");
// }
// console.log("\n");
//coba untuk menggunakan fungsi dan parameter untuk mengecek data
console.log("Ini menggunakan fungsi :");
let barang2 = ['rokok', 'liquid', 'kopi', 'mouse'];
let fungsiCekBarang = (namaBarang) =>{
    this.namaBarang = namaBarang;
    let cekNih = barang2.includes(namaBarang);
    if(cekNih === true){
        return "Barang sudah ada";
    } else {
        return "Barang belum ada";
    }
}
console.log(fungsiCekBarang("api"));
console.log("\n");

console.log("BElajar sorting menggunakan fungsi");
let alfabet = ['a','c','e','r','d','f'];
let fungsiSorting = (dataSorting) => {
    this.dataSorting = dataSorting;
    let cek = dataSorting.sort();
    return cek;
}
console.log(fungsiSorting([2,3,4,8,5,0,9]));