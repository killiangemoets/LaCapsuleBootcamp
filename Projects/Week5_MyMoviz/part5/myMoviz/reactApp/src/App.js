import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";
import { Container, Row } from "reactstrap";

// How useState hook work
// - We can only use hooks inside of function componenents. You cannot use them in class components. (bc classes have their own way to do the same thing).
// - we cannot put a hook (useState, useEffect, ...) inside of a if statement bc the hooks always have to run in the same order, so they must be at the top level.
// - EVERY TIME WE CALL OUR UPDATE FUNCTION (For exemple SetCount), IT'S GOING TO RE-RENDER OUR COMPONENT WITH THE NEW VALUE FOR OUR COUNT !
// - Ne pas faire comme la capsule !!!!!!!!!!! setCount(count-1) is a bad practice bc it doesn't work if we call it 2 times in a row! We will do setCount(prevCount => prevCount - 1)
// - Don't do useState(0) but useState useState( () => return 0). Bc with the first epxression, 0 will be read each time the App function run, while with second expression 0 will be read only the first time the App function is running.

// - Workfing with objects :
// const [state, seState] = useState({count: 4, theme: "blue"})
// setState(prevState => {
//   return {...prevState, count: prevState.count -1 }
// })

function App() {
  // useState is themost important react hook
  // setDataMovies allow use to update the state of dataMovies
  const [dataMovies, setDataMovies] = useState([]);
  var [wishList, setwishList] = useState([]);
  var [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    async function loadData() {
      var rawResponse = await fetch("/new-movies");
      var response = await rawResponse.json();
      // console.log(response);
      setDataMovies(response);
    }

    async function loadWishList() {
      var rawResponse = await fetch("/wishlist-movies");
      var response = await rawResponse.json();
      setwishList(response.data.movies);
      setLikesCount(response.data.movies.length);
    }

    loadData();
    loadWishList();
  }, []);
  // Sometimes we only want the useEffect hook to run when a speficic ressource on your page changes
  // To do that, udeEffect takes a second parameter.
  //This second parameter is going to be an array.
  // Whatever you pass into this array is gonna be values that whatever they change, the hook will run.
  // Un tableau vide pour lui indiquer que nous souhaitons mettre sur écoute uniquement l’initialisation de notre composant

  const updateDataBase = async function (add, data) {
    if (add) {
      await fetch("/wishlist-movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      await fetch(`/wishlist-movies/${data}`, {
        method: "DELETE",
      });
    }
  };

  const handlerClickAddMovie = function (num, updateMovie) {
    setLikesCount(likesCount + num);
    console.log(updateMovie);
    if (num === 1) {
      setwishList([...wishList, updateMovie]);
      updateDataBase(true, updateMovie);
    }
    if (num === -1) {
      setwishList(wishList.filter((movie) => movie.name !== updateMovie.name));
      updateDataBase(false, updateMovie.name);
    }
  };

  const handleRemoveWhishMovie = function (name) {
    setLikesCount(likesCount - 1);
    setwishList(wishList.filter((movie) => movie.name !== name));
    updateDataBase(false, name);
  };

  const createMovieCards = function (movies) {
    const cards = movies.map((movie, i) => {
      return (
        <Movie
          key={i}
          movieName={movie.name}
          movieDesc={movie.desc.slice(0, 80) + "..."}
          movieImg={movie.img}
          globalRating={movie.note}
          globalCountRating={movie.vote}
          handlerLikeEvent={handlerClickAddMovie}
          inTheWishList={
            wishList.find((wishM) => wishM.name === movie.name) ? true : false
          }
        />
      );
    });

    return cards;
  };

  return (
    <div className="content">
      <header>
        <Navbar
          handleRemoveWhishMovie={handleRemoveWhishMovie}
          likesCount={likesCount}
          wishList={wishList}
        />
      </header>
      <main>
        <Container>
          <Row>{createMovieCards(dataMovies)}</Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
