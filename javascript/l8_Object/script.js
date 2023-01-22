// let kesehatan, kekuatan, bertahan, nama;

// function rating(kesehatan, kekuatan, bertahan) {
//   return (kesehatan + kekuatan + bertahan) / 3;
// }

// console.log("Rating Hero Anda " + rating(90, 97, 56));

let namaLengkap = ["Terroy Joy", "Kelly Gun", "Osprey wal"];
let panggilan = ["Joy", "Gun", "Wal"];
let jenisKelamin = ["Laki-laki", "Perempuan", "Laki-laki"];

// namaLengkap.forEach(function (a, b, c) {
//   // for (let a = 0; a <= namaLengkap.length; a++) {
//   console.log(
//     "Nama Lengkap : " + namaLengkap + "\nJulukan : " + panggilan + "\nJenis Kelamin : " + jenisKelamin + "\n\n"
//   );
//   // }
// });
for (let a = 0; a < namaLengkap.length; a++) {
  console.log(
    "Nama Lengkap : " + namaLengkap[a] + "\nJulukan : " + panggilan[a] + "\nJenis Kelamin : " + jenisKelamin[a] + "\n\n"
  );
}
