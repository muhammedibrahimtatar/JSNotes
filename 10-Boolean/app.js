/* Boolean string değildir. True - False değerleri alır. Doğru veya yanlış */

console.log(true,false,'true','false');

let email = "ibrahimtatar@hotmail.com";
let adSoyad = ['can','tugce','elif'];

let varmi = email.includes("g"); //includes, değer belirtilen değişkende var mı kontrol eder.
console.log(varmi);  //varsa trye yoksa false döner.

let varmi2 = adSoyad.includes("tugce");
console.log(varmi2);

let varmi3 = adSoyad.includes("t"); //Eleman içerisindeki değeri aramaz. Direk elemanı bulmalıdır.
console.log(varmi3);

console.log("-----------")

let yas=29;
console.log(yas==29); //Eşit mi ?
console.log(yas==35);
console.log(yas!=35); //Eşit değil mi ?
console.log(yas<=35); //Küçük veya eşit mi ?
console.log(yas>=35); //Büyük veya eşit mi ?