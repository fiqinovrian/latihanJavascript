/*
Case yang digunakan adalah membuat sebuah fungsi untuk mengecek apakah suatu inputan itu palindrome atau bukan
jika palindrome return true, jika sebaliknya return false
palindrome adalah sebuah kata yang jika dibalik balik hasilnya sama
contoh "KODOK", "APA"
*/

//solusi pertama dengan cara mereverse string
// let fungsiPalindrome = (value) => {
//     let temp = "";
//     for(i = value.length -1; i >= 0; i--){
//         temp = temp + value.charAt(i);   
//     }
//     if(temp === value){
//         console.log(temp);
//         console.log("INI PALINDROME");
//     } else {
//         console.log(temp);
//         console.log("INI BUKAN PALINDROME");
//     }
// }
// fungsiPalindrome("laptop");
// console.log("\n");

/*
Solusi kedua adalah dengan tidak membuat variabel temp
caranya adalah membandingkan karakter awal dengan karakter akhir dari kata yang diinputkan
apabila karakter awal dan akhir sama, akan dilanjutkan pengecekan karakter kedua dengan karakter akhir - 1
begitu seterusnya
namun jika karakter awal dan akhir tidak sama, maka langsung didefinisikan sebagai bukan palindrome
*/
let fungsiPalindrome2 = (kata) => {
    for(i = 0; i < kata.length; i++){
        let indexAwal = i;
        let indexAkhir = kata.length - (i + 1);
        if(kata.charAt(indexAwal) == kata.charAt(indexAkhir)){
            console.log("Ini Palindrome");
        } else {
            console.log("Bukan Palindrome");
        }
        // console.log(kata.charAt(i) + " : " + );
    }
}
fungsiPalindrome2("dominasi");