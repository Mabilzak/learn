function getRobot() {
  const robot = Math.random();
  if (robot <= 0.34) return "PAPPER";
  if (robot <= 0.66) return "ROCK";
  return "SCISSORS";
}

function getHasil(robot, player) {
  if (player == robot) return "DRAW!";
  if (player == "PAPPER") return robot == "ROCK" ? "WIN" : "LOSE";
  if (player == "ROCK") return robot == "SCISSORS" ? "WIN!" : "LOSE";
  if (player == "SCISSORS") return robot == "PAPPER" ? "WIN!" : "LOSE";
}
let img = document.getElementsByTagName("div");
const p = document.getElementsByTagName("p");

p[10].addEventListener("click", function () {
  const choicePlayer = "PAPPER";
  img[13].style.backgroundImage = "url('style/img/papper_left_hand.png')";
  console.log("Player " + choicePlayer);
});

p[11].addEventListener("click", function () {
  const choicePlayer = "ROCK";
  img[13].style.backgroundImage = "url('style/img/rock_left_hand.png')";
  console.log("Player " + choicePlayer);
});

p[12].addEventListener("click", function () {
  const choicePlayer = "SCISSORS";
  img[13].style.backgroundImage = "url('style/img/scissors_left_hand.png')";
  console.log("Player " + choicePlayer);
});

const fight = document.getElementsByTagName("p");
fight[8].addEventListener("click", function cRobot() {
  const choiceRobot = getRobot();
  const hasil = getHasil(choiceRobot, optionsPapper);
  console.log("Robot " + choiceRobot + hasil);
  if (choiceRobot == "PAPPER") return (img[4].style.backgroundImage = "url('style/img/papper_right_hand.png')");
  if (choiceRobot == "ROCK") return (img[4].style.backgroundImage = "url('style/img/rock_right_hand.png')");
  return (img[4].style.backgroundImage = "url('style/img/scissors_right_hand.png')");
});
