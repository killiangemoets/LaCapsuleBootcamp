const mario = $("#player");
const star = $("#star");
const score = $("h1").find("span");
var marioPosition = mario.get(0).getBoundingClientRect();
const game = document.querySelector("#game");
var gameExtremities = game.getBoundingClientRect();

// Key Code:
// Left: 37
// Up: 38
// Right: 39
// Down: 40

const speed = 20;
state = {
  x: 0,
  y: 0,
  score: 0,
};

const randomFloatFromRange = (min, max) =>
  Math.random() * (max - min + 1) + min;

const detectCollision = (el1, el2) => {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
};

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37) {
    mario.attr("src", "./images/mario-left-1.png");
    if (marioPosition.left + state.x - speed - 20 < gameExtremities.left)
      return;
    state.x -= speed;
    mario.css("transform", `translate(${state.x}px, ${state.y}px)`);
  }
  if (e.keyCode === 38) {
    mario.attr("src", "./images/mario-back-1.png");
    if (marioPosition.top + state.y - speed + 20 < gameExtremities.top) return;
    state.y -= speed;
    mario.css("transform", `translate(${state.x}px, ${state.y}px)`);
  }
  if (e.keyCode === 39) {
    mario.attr("src", "./images/mario-right-1.png");
    if (marioPosition.right + state.x + speed > gameExtremities.right) return;
    state.x += speed;
    mario.css("transform", `translate(${state.x}px, ${state.y}px)`);
  }
  if (e.keyCode === 40) {
    mario.attr("src", "./images/mario-front-1.png");
    if (marioPosition.bottom + state.y + speed + 10 > gameExtremities.bottom)
      return;
    state.y += speed;
    mario.css("transform", `translate(${state.x}px, ${state.y}px)`);
  }

  if (detectCollision(mario.get(0), star.get(0))) {
    state.score++;
    score.text(state.score);
    renderStar();
  }
});

document.addEventListener("keyup", function () {
  mario.attr("src", "./images/mario-front-1.png");
});

const renderStar = function () {
  const heightStar = 50;
  const widthStar = 50;
  const borders = 40;
  const startY = randomFloatFromRange(
    0,
    gameExtremities.bottom - gameExtremities.top - heightStar - borders
  );
  const startX = randomFloatFromRange(
    0,
    gameExtremities.right - gameExtremities.left - widthStar - borders
  );
  star.css("transform", `translate(${startX}px, ${startY}px)`);
};

const init = function () {
  score.text(state.score);
  renderStar();
};
init();
