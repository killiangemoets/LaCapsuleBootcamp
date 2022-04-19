// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";
import { Container, Row } from "reactstrap";

const movies = [
  {
    name: "Star Wars: L'Ascension de Skywalker",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "images/starwars.jpg",
    note: 6,
    vote: 5,
  },
  {
    name: "Maléfique: Le pouvoir du mal",
    desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un coeur ...",
    img: "images/maleficent.jpg",
    note: 5,
    vote: 3,
  },
  {
    name: "Jumanji: The Next Level",
    desc: "L'équipe est de retour, mais le jeu a changé. Alors qu'ils retournent dans Jumanji pour secourir ...",
    img: "images/jumanji.jpg",
    note: 2,
    vote: 8,
  },
  {
    name: "Bad Boy 3",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "images/badboy3.jpg",
    note: 6,
    vote: 9,
  },
  {
    name: "Frozen",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "images/frozen.jpg",
    note: 6,
    vote: 9,
  },
  {
    name: "Terminator",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "images/terminator.jpg",
    note: 6,
    vote: 9,
  },
  {
    name: "Once Upon A Time",
    desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naitre cette ...",
    img: "images/once_upon.jpg",
    note: 6,
    vote: 9,
  },
];

const createMovieCards = function (movies) {
  const cards = movies.map((movie, i) => {
    return (
      <Movie
        key={i}
        movieName={movie.name}
        movieDesc={movie.desc}
        movieImg={movie.img}
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
        <Container>
          <Row>{createMovieCards(movies)}</Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
