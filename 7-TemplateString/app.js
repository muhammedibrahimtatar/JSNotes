const framework1="Angular";
const framework2="React";
const framework3="Vue";
//String ifadelere değişken ekleyerek yazdırmak
//Yöntem 1
let sonuc="İbrahim TATAR'ın öğrenmek istediği frameworkler;"+framework1+' '+framework2+' '+framework3;
console.log(sonuc);

//Yöntem 2
let sonuc1=`İbrahim TATAR'ın öğrenmek istediği frameworkler;${framework1} ${framework2} ${framework3}`
console.log(sonuc1);

let sonuc2=`
<h1>${framework1}</h1>
<h2>${framework2}</h2>
<h3>${framework3}</h3>
`

console.log(sonuc2);