const mario = $("#player");
const star = $("#star");
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
};

function randomFloatFromRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  return Math.random() * (max - min + 1) + min;
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37) {
    mario.attr("src", "./images/mario-left-1.png");
    if (marioPosition.left + state.x - speed - 10 < gameExtremities.left)
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
});

document.addEventListener("keyup", function (e) {
  //   mario.attr("src", "./images/mario-front-1.png");
});

const renderStar = function () {
  const heightStar = 50;
  const widthStar = 50;
  const startY = randomFloatFromRange(
    gameExtremities.top,
    gameExtremities.bottom - heightStar
  );
  const startX = randomFloatFromRange(
    gameExtremities.left,
    gameExtremities.right - widthStar
  );
  console.log(startX, startY);
  //   star.css("transform", `translate(${startX}px, ${startY}px)`);
};

renderStar();
