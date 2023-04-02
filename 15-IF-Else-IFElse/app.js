const yas =20;

if(yas>18)
{
    console.log("18 yaşından büyüktür.")
}



const adSoyad = ['can','ibrahim','elif'];

if (adSoyad.length > 2 ){
    console.log("İşte benim öğrencilerim");
}



const sifre ="!21d.24"

if (sifre.length>=8){
    console.log("Şifre yeterince uzun");
}
else{
    console.log("Şifre 8 karakter veya daha uzun olmalıdır.")
}



const parola = "dasd13asdad2a";

if(parola.length>=12){
    console.log("Şifre güçlü");
}else if (parola.length>=8){
    console.log("Şifre yeterli");
}else{
    console.log("Şifre yetersiz")
}
