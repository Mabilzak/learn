//Destructuring Sederhana Part 1 (Example ARRAY)

// const artistList = ["Juice WRLD", "Machine Gun Kelly", "Coldplay", "Billie Ellish"];

// const [artist1, artist2, , artist4] = artistList; //Bisa Diskipp

// const tagP = document.getElementsByTagName("p");

// tagP[1].innerHTML = artist1;
// tagP[3].innerHTML = artist2;
// tagP[5].innerHTML = artist4;

//Part 2 Swap Items

// let a = 1,
//   b = 13;
// console.log(`'Sebelum diSwab' Variable a = ${a} dan Variable ${b} `);
// [a, b] = [b, a];
// console.log(`'Setelah diSwab' Variable a = ${a} dan Variable ${b} `);

//Part 3

function Artist(nama, rating, music) {
  this.nama = nama;
  this.rating = rating;
  this.music = {
    no1: music.no1,
    no2: music.no2,
    no3: music.no3,
  };
}
// --------- Daftar Artist ---------
let artist1 = new Artist("Juice WRLD", 86, {
  no1: "Black & White",
  no2: "Lucid Dream",
  no3: "Righteous",
});

let artist2 = new Artist("Joji", 84, {
  no1: "Slow Dancing In The Dark",
  no2: "Glimse Of Us",
  no3: "Pretty Boy",
});

let artist3 = new Artist("Machine Gun Kelly", 84, {
  no1: "Rap Devil",
  no2: "I Think I'm Okay",
  no3: "My ex's Best Friend",
});
// ----------------------------------------------------
//
const tagP = document.getElementsByTagName("p");
const tagDiv = document.getElementsByTagName("div");

tagP[1].innerHTML = artist1.nama;
tagDiv[2].addEventListener("click", function () {
  return (
    (tagP[7].innerHTML = artist1.nama),
    (tagP[9].innerHTML = artist1.rating),
    (tagP[11].innerHTML = artist1.music.no1),
    (tagP[12].innerHTML = artist1.music.no2),
    (tagP[13].innerHTML = artist1.music.no3)
  );
});

tagP[3].innerHTML = artist2.nama;
tagDiv[3].addEventListener("click", function () {
  return (
    (tagP[7].innerHTML = artist2.nama),
    (tagP[9].innerHTML = artist2.rating),
    (tagP[11].innerHTML = artist2.music.no1),
    (tagP[12].innerHTML = artist2.music.no2),
    (tagP[13].innerHTML = artist2.music.no3)
  );
});

tagP[5].innerHTML = artist3.nama;
tagDiv[4].addEventListener("click", function () {
  return (
    (tagP[7].innerHTML = artist3.nama),
    (tagP[9].innerHTML = artist3.rating),
    (tagP[11].innerHTML = artist3.music.no1),
    (tagP[12].innerHTML = artist3.music.no2),
    (tagP[13].innerHTML = artist3.music.no3)
  );
});
