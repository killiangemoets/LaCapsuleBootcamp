const cat = $("#cat-run");
const btn = $("#action");

// let numImg = 2;
// btn.click(function () {
//   cat.attr("src", `./images/cat-${numImg}.jpg`);
//   numImg = numImg === 13 ? 1 : numImg + 1;
// });

const speed = 50;
let numImg = 2;
let state = 0;

var timer = null;
btn.click(function () {
  if (state === 0) {
    timer = setInterval(run, speed);
    btn.text("Stop");

    state = 1;
  } else {
    clearInterval(timer);
    btn.text("Run");

    state = 0;
  }
});

function run() {
  cat.attr("src", `./images/cat-${numImg}.jpg`);
  numImg = numImg === 13 ? 1 : numImg + 1;
}
