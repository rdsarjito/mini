
const simpan = function () {

}
function addEventListener(event, callback) {
  if (event === 'click') {
    // lakukan apapun; 
    // setelah selesai;
    callback();
  }
}

addEventListener('click', simpan);





// function memakan() {
//   return jenisMakanan();
// }

// function jenisMakanan() {
//   return 'buah';
// }

// function berapaBanyak() {
//   return 1;
// }

// var aktifitas = memakan();
  
// if (aktifitas === 'boker') {
//   console.log('ya boker');
// } else {
//   console.log('auk lagi ngapain');
// }

// console.log(memakan())

// function seseorang(){
//   if (seseorang() < 20){
//     return 'bisa lebih tinggi';
//   }else {
//     return 'tidak bisa tinggi lagi';
//   };
// };

// console.log(seseorang());
function apakahInteger(parameter) {
  if (typeof parameter === 'Number') {
    return true;
  } else {
    return false;
  }
}

/**
 * acak nomor, mengambil angka dari kumpulan nilai array
 * param = array yang berisi angka
 * return = angka
 */
function acakNomor(kumpulanAngka) {
  var nilaiAcak = Math.random() * (kumpulanAngka.length - 1);
  return kumpulanAngka[Math.floor(nilaiAcak)];
}

console.log(acakNomor([2, 20, 100, 49, 20, 30]))

