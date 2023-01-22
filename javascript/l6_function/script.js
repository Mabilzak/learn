let kesehatan, kekuatan, bertahan, nama;

function rating(kesehatan, kekuatan, bertahan) {
  return (kesehatan + kekuatan + bertahan) / 3;
}

// kesehatan = parseInt(prompt("Kesehatan = "));
// kekuatan = parseInt(prompt("Kekuatan = "));
// bertahan = parseInt(prompt("bertahan = "));

console.log("Rating Hero Anda " + rating(90, 97, 56));

function faktorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * faktorial(a - 1);
}

console.log(faktorial(5));
