var ctxBar = document.getElementById("chartBar");

const numMen = +ctxBar.dataset.men;
const numWomen = +ctxBar.dataset.women;

new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["male", "female"],
    datasets: [
      {
        data: [numMen, numWomen],
        backgroundColor: ["#4b6584", "#fc5c65"],
        borderColor: ["#304256", "#dd252b"],
        borderWidth: 2,
        label: "",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Number of users per gender",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

var ctxDoughnut = document.getElementById("chartDoughnut");

const numRead = +ctxDoughnut.dataset.read;
const numUnread = +ctxDoughnut.dataset.unread;

new Chart(ctxDoughnut, {
  type: "doughnut",
  data: {
    labels: ["read", "undread"],
    datasets: [
      {
        data: [numRead, numUnread],
        backgroundColor: ["#badc58", "#ffbe76"],
        borderColor: ["#6ab04c", "#f0932b"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Number of read and unread messages",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  },
});
var ctxPie = document.getElementById("chartPie");

const numShipped = +ctxPie.dataset.shipped;
const numNotShipped = +ctxPie.dataset.notshipped;

new Chart(ctxPie, {
  type: "pie",
  data: {
    labels: ["shipped", "not shipped"],
    datasets: [
      {
        data: [numShipped, numNotShipped],
        backgroundColor: ["#7ed6df", "#e056fd"],
        borderColor: ["#22a6b3", "#be2edd"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Number of orders shipped and not shipped",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  },
});

var ctxLine = document.getElementById("chartLine");
const turnoverData = JSON.parse(ctxLine.dataset.turnover);
const xAxis = turnoverData.map((el) => el._id);
const yAxis = turnoverData.map((el) => el.turnover);

new Chart(ctxLine, {
  type: "line",
  data: {
    labels: xAxis,
    datasets: [
      {
        data: yAxis,
        backgroundColor: "#9AECDB",
        borderColor: "#58B19F",
        borderWidth: 2,
        fill: {
          target: "origin",
          above: "#9AECDB",
          below: "#9AECDB",
        },
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Turnover per month",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: false,
      },
    },
  },
});
