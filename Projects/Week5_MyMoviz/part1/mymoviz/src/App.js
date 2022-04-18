// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.js";
import Movie from "./components/movie.js";

const movies = [
  {
    name: "Star Wars: L'Ascension de Skywalker",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "img/stawars.jpg",
    vues: 3,
    note: 6,
    vote: 5,
  },
  {
    name: "Maléfique: Le pouvoir du mal",
    desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un coeur ...",
    img: "img/maleficent.jpg",
    vues: 2,
    note: 5,
    vote: 3,
  },
  {
    name: "Jumanji: The Next Level",
    desc: "L'équipe est de retour, mais le jeu a changé. Alors qu'ils retournent dans Jumanji pour secourir ...",
    img: "img/jumani.jpg",
    vues: 1,
    note: 2,
    vote: 8,
  },
  {
    name: "Bad Boy 3",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "img/badboy3.jpg",
    vues: 3,
    note: 6,
    vote: 9,
  },
  {
    name: "Bad Boy 3",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "img/badboy3.jpg",
    vues: 3,
    note: 6,
    vote: 9,
  },
  {
    name: "Frozen",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "img/frozen.jpg",
    vues: 3,
    note: 6,
    vote: 9,
  },
  {
    name: "Terminator",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "img/terminator.jpg",
    vues: 3,
    note: 6,
    vote: 9,
  },
  {
    name: "Once Upon A Time",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "img/one_upon.jpg",
    vues: 3,
    note: 6,
    vote: 9,
  },
];

const createMovieCards = function (movies) {
  const cards = movies.map((movie) => {
    return (
      <Movie
        movieName={movie.name}
        movieDesc={movie.desc}
        movieImg={movie.img}
        movieVues={movie.vues}
        globalRating={movie.note}
        globalCountRating={movie.vote}
      />
    );
  });

  return cards;
};

function App() {
  return (
    <div className="content">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row">{createMovieCards(movies)}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
