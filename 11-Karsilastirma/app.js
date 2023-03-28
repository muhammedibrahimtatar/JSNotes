//let yas = 29;

// //== ile veri tipini otomatik olarak js değiştirir. True verir
// console.log(yas == 29);
// console.log(yas == "29");

// console.log(yas != 29);
// console.log(yas != "29");

// //Veri tipiyle beraber kontrol etmek için === kullanılır
// console.log(yas === 29);
// console.log(yas === "29");

// console.log(yas !== 29);
// console.log(yas !== "29");


let yas1="29";
console.log(typeof yas1);
console.log(yas1+2); //string olduğu için elemanı yanına ekledi.


yas1=Number(yas1); //tip değiştirme sonucu number işlemlerini yapar.
console.log(typeof yas1);
console.log(yas1+2);

let isim ="can";
isim=Number(isim);
console.log(isim); //NaN - Not a number sonucu döner.
