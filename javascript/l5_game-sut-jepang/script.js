for (let ok = true; ok == true; ) {
  let me = prompt("Hello Selamat Datang Di Game Suit Jepang\n Silahkan Pilih : KERTAS, BATU, GUNTING");

  let robot = Math.random();

  if (robot <= 0.33) {
    robot = "KERTAS";
  } else if (robot > 0.33 && robot <= 0.6) {
    robot = "BATU";
  } else {
    robot = "GUNTING";
  }
  console.log(robot);

  let hasil;

  if (me == robot) {
    hasil = "DRAW!";
  } else if (me == "KERTAS" || me == "kertas" || me == "Kertas") {
    hasil = robot == "BATU" ? "pemenangnya!" : "LOOOSEERR!!!";
  } else if (me == "BATU" || me == "batu" || me == "Batu") {
    hasil = robot == "GUNTING" ? "pemenangnya!" : "LOOOSEERR!!!";
  } else if (me == "GUNTING" || me == "gunting" || me == "Gunting") {
    hasil = robot == "KERTAS" ? "pemenangnya!" : "LOOOSEERR!!!";
  } else {
    hasil = "Mungkin Salah Ketik";
  }

  alert("Kamu Pilih " + me + " & Robot Memilih " + robot + "\n Kamu Adalah " + hasil);

  ok = confirm("Mau Coba Lagi!");
}

alert("Robot : Terimakasih, Senang Bermain Dengan Anda\n Semoga Anda Mencoba Lagi");
