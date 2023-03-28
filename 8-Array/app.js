/*Array Dizi demek
Bir değişkende birden fazla veri tutabilir.
let kullanılırsa değiştirilebilir
const kullanımında değiştirilemez.
*/

//String
let isimler = ['İbrahim','Osman','Ayşegül'];
console.log(isimler[0]);
isimler[0]='Tuğçe';
console.log(isimler[0]);


//Number
let yaslar = [1,22,33,44];
console.log(yaslar[3]);


//Karışık tipler
let rastgele = ['ibrahim','tatar',30,5609];
console.log(rastgele);
console.log(rastgele.length)


// Join - Elemanların arasına Join ile istenilen simge eklenebilir.
let tireli = isimler.join("-");
console.log(tireli);
let virgullu = isimler.join(",");
console.log(virgullu);

//IndexOf - Elemanın index değerini bulmak
let sira=isimler.indexOf('Osman');
console.log(sira);

//Concat - Diziye eleman eklemeye yarar. isimleri değiştirmez yeni oluşturduğumuzu değiştirir.
let ekle = isimler.concat(["Ali","Arzu"]);
console.log(ekle);
console.log(isimler);

//Push - Var olan dizeye eleman ekler
let elemanekle = isimler.push("Leyla");
console.log(isimler);

//Pop - Var olan dizeye eklenen elemanı siler
let elemansil=isimler.pop("Leyla");
console.log(isimler);

