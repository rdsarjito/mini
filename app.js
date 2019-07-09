const main = document.querySelector('.main');
const buttonSimpan = document.querySelector('.green.button-center');
const nilaiInputText = document.querySelector('input[type="text"]');
const td = document.getElementById("td");

// add event listener sebuah tombol dari button Simpan
buttonSimpan.addEventListener('click', tambahBaris);

// fungsi simpan
function simpan() {
  window.alert(`${nilaiInputText.value} nilai vote nya ${document.querySelector('input[type="radio"]:checked').value}`);
}

// fungsi tambahbaris
function tambahBaris(){
  // 0 = table pertama
  var table = document.getElementsByTagName('table')[0];

  // menambahkan baris kosong
  // 0 = untuk row pertama
  // table.rows.length = untuk terakhir
  // table.rows.length/2+1 = untuk ditengah
  var newRow = table.insertRow(table.rows.length);

  // menambahkan cel di baris 
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);

  // add values to the cells
  cel1.innerHTML = nilaiInputText.value;
  cel2.innerHTML = document.querySelector('input[type="radio"]:checked').value;
  cel3.innerHTML = td.innerHTML;
}