//this code based on tutorial at petanicode.com

//using math function
const n = Math.sin(10); //funsgi math untuk sin
const cos = Math.cos(10); //fungsi math untuk cos
const tan = Math.tan(10); //fungsi math untuk tan
console.log(n);
console.log(cos);
console.log(tan);
console.log("\n");

//logaritma adalah operasi matematika yang merupakan kebalikan (inverse) dari eksponen atau pemangkatan
const logaritma = Math.log(10); //fungsi math untuk mencari logaritma
const pangkat = Math.pow(5,2); //fungsi math untuk pemangkatan, 2 parameter. parameter pertama angka yang akan dipangkatkan, angka kedua itu pangkatnya
const exponensial = Math.exp(1); //fungsi math untuk eksponensial
console.log(logaritma);
console.log(pangkat);
console.log(exponensial);
console.log("\n");


/* Dibawah ini merupakan beberapa fungsi untuk pembulatan dalam javascript */
/*
ada beberapa fungsi pembulatan di math :
1. floor() -> Untuk membulatkan ke bawah
2. round() -> untuk membulatkan angka ke yang terdekat, bisa ke bawah dan keatas
3. ceil() -> untuk membulatkan angka ke atas
*/

const pembulatanKeBawah = Math.floor(3.5);
const pembulatanTerdekat = Math.round(3.4);
const pembulatanKeAtas = Math.ceil(3.5);

console.log(pembulatanKeBawah);
console.log(pembulatanTerdekat);
console.log(pembulatanKeAtas);
console.log("\n");

/*dibawah ini merupakan fungsi math untuk akar dua*/
const fungsiAkar = Math.sqrt(25);
console.log(fungsiAkar);

/* dibawah ini merupakan fungsi math untuk akar tiga */
const fungsiAkarTiga = Math.cbrt(125);
console.log(fungsiAkarTiga);

/* untuk akar n atau nth root, kita bisa menggunakan fungsi pos() */
const akarN = Math.pow(625, 1/4);
console.log(akarN);

/* fungsi random dan mutlak di javascript */
const angkaRandom = Math.random();
console.log(angkaRandom);

/* untuk mencetak angka random dari rentang tertentu, kita bisa menggunakan bantuan fungsi floor. Bagaimana ? */
const fungsiRandomRentang = (min, max) => {
    return Math.floor(Math.random() * (max - min) - min);
}
console.log(fungsiRandomRentang(1,100));

/*
funsgi mutlak merupakan fungsi yang menghasilkan nilai mutlak / absolute 
contoh pemakaian nya dibawah ini 
*/
const angkaMutlak = Math.abs(-2);
console.log(angkaMutlak); // outputnya akan 2. mengapa demikian? karena fungsi abs() akan selalu memberikan nilai mutlak / positif

/* 
dibawah ini akan menggunakan fungsi minimum dan maximum 
*/
const min1 = Math.min(5,3,7,8,5,9,0,2);
console.log(min1);
const max1 = Math.max(100,88,44,55,6,33,6);
console.log(max1);

/*
contoh penggunaan fungsi minimum dan maximum di dalam array
*/
const min2 = Math.min([2,3,5,6,7,8,2,4,6,7,8]);
console.log(min2); // output akan menjadi NaN. Mengapa ? karena kalo di dalam array harus menggunakan operator "..." operator yang ditambahkan pada ES2015 yang berfungsi untuk memecah isi array dan string. mari kita coba
const min3 = Math.min(...[2, 3, 5, 6, 7, 8, 2, 4, 6, 7, 8]);
console.log(min3);
/* berhasil. hal ini juga berlaku kepada fungsi max */
const max2 = Math.max(...[33,23,45,34,67,44,68,2357]);
console.log(max2);

/* konstanta di object math */
Math.E;
Math.PI;
/* dst */