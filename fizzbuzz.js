/*
ide nya adalah mengecek angka yang apabila habis dibagi 3 keluarkan tulisan fizz
apabila habis dibagi 5 keluarkan tulisan buzz
apabila habis dibagi 3 dan 5 keluarkan tulisan fizz buzz
*/
let fizzBuzz = (angka) => {
    for(i =0; i <= angka; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("Fizz BUzz");
        } else 
        if(i % 3 == 0) {
            console.log("Fizz");
        } else 
        if(i % 5 == 0){
            console.log("Buzz");
        } else
        {
            console.log(i);
        }
    }
}
fizzBuzz(100);