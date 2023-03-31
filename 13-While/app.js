/*
While döngüsünde fordaki gibi 3lü bir kullanım yok. Sadece koşul değeri var.
 */

const adSoyad = ["can","tugce","elif"];
let i = 0;

while(i<10){
    console.log("Hello"+i);
    i++;
}


i=0;

while (i<adSoyad.length){
    console.log(adSoyad[i]);
    i++;
}

i=6;
while(i>3){
    console.log(i);
    i--;
}