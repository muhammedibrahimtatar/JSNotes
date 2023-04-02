
//&& AND  - 2 koşulda sağlanmalı
const sifre = "1241vfasdd11D!"

if (sifre.length>=12 && sifre.includes("!")){
    console.log("Şifre güçlü");
}


//|| OR   - 2 koşuldan biri sağlanmalı
const sifre2 = "12345!"

if (sifre2.length>=12 || sifre.includes("!")){
    console.log("Şifre iyi");
}


// !  NOT  - Değilse veya false ise gibi anlam taşır
const control = false;
if(!control){
    console.log("Control başarılı");
}