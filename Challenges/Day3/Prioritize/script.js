const criticalities = document.getElementsByClassName("criticality");
const btn = document.querySelector(".btn--urgent");
const container = document.getElementById("container");

const savedTasks = [];

const initializeCriticalities = function () {
  Array.from(criticalities).forEach((criticality) => {
    const num = criticality.textContent;
    savedTasks.push(criticality.parentNode);
    switch (num) {
      case "1":
        criticality.style.backgroundColor = "rgb(60, 184, 91)";
        break;
      case "2":
        criticality.style.backgroundColor = "rgb(255, 218, 52)";
        break;
      case "3":
        criticality.style.backgroundColor = "rgb(243, 162, 12)";
        break;
      case "4":
        criticality.style.backgroundColor = "rgb(236, 38, 38)";
        break;
    }
  });
};
initializeCriticalities();
console.log(savedTasks);
console.log(criticalities);

btn.addEventListener("click", function () {
  if (btn.dataset.state == 0) {
    Array.from(criticalities).forEach((criticality) => {
      if (criticality.textContent == 1 || criticality.textContent === 2) {
        criticality.parentNode.remove();
        btn.textContent = "Display all the tasks";
        btn.dataset.state = 1;
      }
    });
  } else if (btn.dataset.state == 1) {
    Array.from(criticalities).forEach((criticality) => {
      criticality.parentNode.remove();
    });
    Array.from(savedTasks).forEach((task) => {
      container.appendChild(task);
      btn.textContent = "What's urgent?";
      btn.dataset.state = 0;
    });
  }
});
