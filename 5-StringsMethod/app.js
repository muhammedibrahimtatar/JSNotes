let adSoyad="Muhammed İbrahim TATAR"

//Sondan indexi bulur.
let son = adSoyad.lastIndexOf("R");
console.log(son);

//İstenilen aralığı alır
let bastanSona =adSoyad.slice(0,7);
console.log(bastanSona);

//5ten başlatıp,6 index sayar ve onu getirir
let bastanSonaSubstring =adSoyad.substr(5,6);
console.log(bastanSonaSubstring);

//Yer değiştirme
let yerDegister= adSoyad.replace('m','w');
console.log(yerDegister);