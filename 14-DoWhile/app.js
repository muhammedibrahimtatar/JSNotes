
/*
Do-While, While'dan farklı olarak do yazdıktan sonra komut doğru mu bakmaksızın ilk defa do'nun içindekileri çalıştıyor.Daha sonra while içindeki durumu kontrol ederek çalıştırıyor.
*/


let i=5;

//Burda koşul arar ve koşul sağlanırsa işlemi yapar.
while(i<5){
    console.log(i);
    i++;
}


//Do-while da ise önce işlemi yapar. Sonra kontrol sağlanıyorsa işlemi yapmaya devam eder.
do{
    console.log(i);
    i++;
}while(i<5);