/*
    for(baslangic;bitis;artış miktari){
        her defasında yapılacak işlem.
    }

 */

    //For örnek 1
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("Döngü bitti");



    // For örnek 2
const isim= ['Can','Ahmet','Tuğçe'];

for (let i=0;i<isim.length;i++){
    // console.log(isim[i]);

    let html=`<div>${isim[i]}</div>`
    console.log(html);
}