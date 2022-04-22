import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";
import { Container, Row } from "reactstrap";

function App() {
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
