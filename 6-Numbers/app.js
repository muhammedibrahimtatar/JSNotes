let yaricap = 15;
const pi=3.14; //Pi sayısı değiştemez sabittir.
console.log(yaricap,pi);

//Daire alan hesaplama
let daireAlani=pi*yaricap**2;
console.log(daireAlani)

console.log("Bölme:"+16/4);

//Bölümden kalan
let kalan=15%4;
console.log("Kalan:"+kalan);

//İşlem önceliği
let sonuc=6*(15-4)**2;
console.log(sonuc);

//3 artırma ifadesi de doğrudur.
let sayi=13;
sayi=sayi+1;
sayi+=1;
sayi++;
console.log(sayi);

let sayi2=12;
sayi2/=2;
sayi2*=3;
sayi2-=14;
console.log(sayi2)

//NaN - Not a Number (Bir sayıyı string ifadeyle çarpma veya bölme işleminde bu uyarıyı verir)

console.log('İbrahim'/23);
console.log('İbrahim'*23);
console.log('İbrahim'+23); // Toplamada sonuc string olur
console.log('İbrahim'-23);
