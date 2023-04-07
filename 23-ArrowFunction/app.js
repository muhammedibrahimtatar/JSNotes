// const kareAlani = function(kenar){
//     let alan = kenar**2;
//     return alan;

//     //return kenar **2; bu şekilde de kullanılabilir.
// }

// Tek satır return ve tek eleman alıyorsa
const kareAlani = kenar=> kenar **2; 

//Birden çok eleman ve birden çok satır return varsa 
const kareAlani2 = (kenar)=>{
        return kenar **2; 
    }

const sonuc = kareAlani(5);
console.log(sonuc);


//Parametre almıyor ve sonuc tek satırla dönüyorsa.
const can = () => 'Can';

const sonuc2= can();
console.log(sonuc2);


//Birden çok parametre alıp çoklu satır dönüyorsa.
const fatura=(fiyatlar,vergi) => {
    let toplam = 0;
    for (i=0;i<fiyatlar.length;i++){
        toplam=fiyatlar[i]+fiyatlar[i]*vergi;
    }
    return toplam;
}

console.log(fatura([10,20,30,40],0.25))