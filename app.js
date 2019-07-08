const main = document.querySelector('.main');
const buttonSimpan = document.querySelector('.green.button-center');
const nilaiInputText = document.querySelector('input[type="text"]');

// add event listener sebuah tombol dari button Simpan
buttonSimpan.addEventListener('click', isiTable);

function simpan() {
  window.alert(`${nilaiInputText.value} nilai vote nya ${document.querySelector('input[type="radio"]:checked').value}`);
}

function isiTable(){
  const table = document.getElementsByTagName('table')[0];
  
  const kolomBaru = table.insertRow(0);

  const cellNama = kolomBaru.insertCell(0);

  cellNama.innerHTML = nilaiInputText.value;

}