

// Fonksiyon içerisindeki elemanlara return ile dönmezsek local değişken olduğu için ulaşamayız

const kareAlani = function(kenar){
    let alan = kenar**2;
    return alan;

    //return kenar **2; bu şekilde de kullanılabilir.
}

const sonuc = kareAlani(5);
console.log(sonuc);

