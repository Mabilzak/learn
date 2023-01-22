// Jenis Function Yang Digunakan = Constructor

function Hero(namaLengkap, julukan, jenisKelamin, element) {
  this.namaLengkap = namaLengkap;
  this.julukan = julukan;
  this.jenisKelamin = jenisKelamin;
  this.element = element;
}

let hero1 = new Hero("Joko Kratos", "Jokrats", "Laki-laki", "The Darknes"),
  hero2 = new Hero("Mamphis Depp", "Sang Tanpa Sentuh", "Laki-laki", "Nothing");
