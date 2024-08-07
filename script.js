
const nmBrg = ["Roti Aoka", "Roti Padimas", "Roti Buaya"];

// Basic Method Array

console.info(`Isi Box : ${nmBrg}`) // Syntax untuk mengetahui isi value yang ada didalam Array
console.info(`Jumlah Barang : ${nmBrg.length}`); // Syntax untuk Panjang atau Jumlah Array
console.info(`Barang ke -1 : ${nmBrg[0]}`); // Syntax untuk mengetahui value dengan metode memanggil index
console.info(`Barang ke -2 : ${nmBrg[1]}`); // Barang ke -2
console.info(`Barang ke -3 : ${nmBrg[2]}`); // Barang ke -3

console.info("--------------------------------") // Garis Pembatas

// For Each

nmBrg.forEach((value, index) => console.info(`Barang ke -${index + 1} : ${value}`));

console.info("--------------------------------") // Garis Pembatas

// For i

for (let i = 0; i < nmBrg.length; i++) {
  console.info(`Isi Box ${i + 1} : ${nmBrg[i]}`);
}