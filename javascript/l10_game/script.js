function Character(biodata, health, energy, strong) {
  this.biodata = {
    username: biodata.username,
    nickname: biodata.nickname,
    nationality: biodata.nationality,
    job: biodata.job,
    story: biodata.story,
  };
  this.health = health;
  this.energy = energy;
  this.strong = strong;
}
Character.eat = function (portion) {
  this.energy = this.energy + portion / 2;
};

let character1 = new Character(
  {
    username: "Hugo Halle",
    nickname: "Hugo, Littlefinger",
    nationality: "America",
    job: "Salazar S'50",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  34,
  58,
  50
);

let character2 = new Character(
  { username: "Sudjatno Miktrono", nickname: "Mino, Loop Beast", nationality: "Indonesia", job: "Cafetarian" },
  20,
  30,
  88
);

let character3 = new Character(
  { username: "Scarlet Megan", nickname: "Megan, Secret Thing", nationality: "South African", job: "Model" },
  36,
  60,
  30
);

const tagP = document.getElementsByTagName("p");
tagP[2].innerHTML = character1.biodata.username;
tagP[11].innerHTML = character1.biodata.username;
tagP[13].innerHTML = character1.biodata.nickname;
tagP[15].innerHTML = character1.biodata.nationality;
tagP[17].innerHTML = character1.biodata.job;
tagP[3].innerHTML = character1.biodata.story;
tagP[5].innerHTML = character1.health;
tagP[7].innerHTML = character1.energy;
tagP[9].innerHTML = character1.strong;
