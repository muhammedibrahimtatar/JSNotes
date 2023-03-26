/*
let değiştirilebilir var oluşturur. let değişkendir
const değiştirilemez var oluşturur. const sabittir Değiştirlemez
*/

let gun=12;
let ay=6;
let yil=2022;

console.log(gun,ay,yil);
console.log("İbrahim Tatar "+gun+"/"+ay+"/"+yil+"/ tarihinde yazılıma başlamıştır.")


gun=29;
console.log(gun);

const sifiraracfiyati=250000;
sifiraracfiyati=100000; // Const ile tanımlandığı için hata verecektir. TypeError verecektir.h
console.log(sifiraracfiyati);


// Yukarıdaki satırda hata verdiği için işleme devam etmez. Bu sebeple aşağıdaki kodlar çalıştırılmaz.
var arabafiyati=120000;
console.log(arabafiyati);

// Tekli yorum satırı

/* Çoklu 
Yorum 
satırı
 */