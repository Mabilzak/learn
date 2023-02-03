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

const rice = 16,
  venison = 20,
  peanut = 10,
  cassava = 17;

Character.prototype.eat = function (portion) {
  this.health = this.health + portion / 4;
  return `${this.biodata.username} Eating ${portion}, your health increases by ${this.health}`;
};

Character.prototype.punch = function (touch) {
  this.health = this.health + touch / 3;
  return `${this.biodata.username} Punch by Hit ${touch}, and health remaining ${this.health} `;
};

Character.prototype.sleep = function (time) {
  this.energy = this.energy + time / 2;
  return `${this.biodata.username} Sleeping ${time} Hours, your energy increases by ${this.energy}`;
};

Character.prototype.work = function (time) {
  this.energy = this.energy + time / 2;
  return `${this.biodata.username} Working for ${time}, and the energy is reduced by ${this.energy}`;
};

let character1 = new Character(
  {
    username: "Hugo Halle",
    nickname: "Hugo, Littlefinger",
    nationality: "America",
    job: "Salazar S'50",
    story:
      "Character 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  34,
  58,
  50
);

let character2 = new Character(
  {
    username: "Sudjatno Miktrono",
    nickname: "Mino, Loop Beast",
    nationality: "Indonesia",
    job: "Cafetarian",
    story:
      "Character 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  20,
  30,
  88
);

let character3 = new Character(
  {
    username: "Scarlet Megan",
    nickname: "Megan, Secret Thing",
    nationality: "South African",
    job: "Model",
    story:
      "Character 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  36,
  60,
  30
);

let character4 = new Character(
  {
    username: "Dasha Tarna",
    nickname: "Dasha",
    nationality: "Unirian",
    job: "Waitress",
    story: "Character 4. Dasha is a Waitress in salah satu elit restaurant.",
  },
  40,
  38,
  22
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

//      TIME  & LEARN Funchion Arrow
// const Time = function () {
//   this.hours = 0;
//   this.minute = 0;
//   this.second = 0;

//   setInterval(() => {
//     this.minute++;
//   }, 1000 * 60);
//   console.log(
//     `Waktu Sekarang ${setInterval(() => {
//       this.hours++;
//     }, 1000 * 60 * 60)}:${this.minute}:${setInterval(() => {
//       this.second++;
//     }, 1000)  }`
//   );
// };

// let clock = new Time();
