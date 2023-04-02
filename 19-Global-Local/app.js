let yas =29; //Global değişken

if (true){
    let yas=39; //Local değişkeni global alanda yazamayız.
    console.log("İçerideki:",yas);
    if (true){
        let yas=45; //Local değişken
        console.log("İçeridekinin içi:",yas);
    }
}

console.log("Dışarıdaki:",yas);