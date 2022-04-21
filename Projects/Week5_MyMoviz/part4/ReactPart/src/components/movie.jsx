import React, { useState } from "react";
import { Card, CardImg, CardBody, CardText, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVideo, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Movie(props) {
  // const [likeMovie, setLikeMovie] = useState(false);
  const [watchMovie, setWatchMovie] = useState(false);
  const [countViews, setCountViews] = useState(0);
  const [myRatingMovie, setMyRatingMovie] = useState(0);

  const globalRatingMovie = props.globalRating;
  const globalCountRating = props.globalCountRating;
  const [newCountRating, setNewCountRating] = useState(globalCountRating);
  const [newRatingMovie, setNewRatingMovie] = useState(globalRatingMovie);

  var colorLike, colorWatch;

  const handleClickLike = (updateMovie) => {
    // setLikeMovie(!likeMovie);
    // const num = likeMovie ? -1 : +1;
    const num = props.inTheWishList ? -1 : +1;
    props.handlerLikeEvent(num, updateMovie);
  };

  const handleClickWatch = () => {
    setWatchMovie(true);
    setCountViews(countViews + 1);
  };

  const handleClickAvis = (num) => {
    if (myRatingMovie + num >= 1 && myRatingMovie + num <= 10) {
      setMyRatingMovie(myRatingMovie + num);
      setNewRatingMovie(
        (globalRatingMovie * globalCountRating + myRatingMovie + num) /
          (globalCountRating + 1)
      );
      setNewCountRating(globalCountRating + 1);
    } else if (myRatingMovie + num === 0) {
      setMyRatingMovie(myRatingMovie + num);
      setNewRatingMovie(globalRatingMovie);
      setNewCountRating(globalCountRating);
    }
  };

  const handleClickStar = (e) => {
    const star = e.target.closest(".star-icon");

    if (!star) return;
    const myNewRatingMovie = +star.dataset.rating;
    console.log(myNewRatingMovie);
    if (myNewRatingMovie >= 1 && myNewRatingMovie <= 10) {
      setMyRatingMovie(myNewRatingMovie);
      setNewRatingMovie(
        (globalRatingMovie * globalCountRating + myNewRatingMovie) /
          (globalCountRating + 1)
      );
      setNewCountRating(globalCountRating + 1);
    } else if (myNewRatingMovie === 0) {
      setMyRatingMovie(myNewRatingMovie);
      setNewRatingMovie(globalRatingMovie);
      setNewCountRating(globalCountRating);
    }
  };

  const createStars = function (numStars = 10, rating = 0) {
    let stars = [];

    rating = Math.round(rating);

    for (let i = 0; i < numStars; i++) {
      if (i < rating)
        stars.push(
          <FontAwesomeIcon
            key={i}
            data-rating={i + 1}
            style={{ color: "#f1c40f" }}
            className="star-icon"
            icon={faStar}
          />
        );
      else
        stars.push(
          <FontAwesomeIcon
            key={i}
            data-rating={i + 1}
            className="star-icon"
            icon={faStar}
          />
        );
    }
    return stars;
  };

  if (props.inTheWishList) {
    colorLike = { color: "#e74c3c" };
  } else {
    colorLike = {};
  }

  if (watchMovie) {
    colorWatch = { color: "#e74c3c" };
  } else {
    colorWatch = {};
  }

  // console.log(globalCountRating, newCountRating);
  // console.log(globalRatingMovie, newRatingMovie);

  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <Card className="movie-card">
        <CardImg
          alt="Card image cap"
          src={props.movieImg}
          top
          className="movie-img"
          width="100%"
        />
        <CardBody className="movie-content">
          <div>
            <p className="movie-section">
              Like{" "}
              <FontAwesomeIcon
                style={colorLike}
                className="heart-icon"
                icon={faHeart}
                onClick={() =>
                  handleClickLike({
                    img: props.movieImg,
                    name: props.movieName,
                  })
                }
              />
            </p>
          </div>
          <div>
            <p className="movie-section">
              Nombre de Vues{" "}
              <FontAwesomeIcon
                style={colorWatch}
                className="camera-icon"
                icon={faVideo}
                onClick={() => handleClickWatch()}
              />{" "}
              <span className="num-vues">{countViews}</span>
            </p>
          </div>
          <div>
            <p className="movie-section" onClick={(e) => handleClickStar(e)}>
              Mon avis: {createStars(10, myRatingMovie)}
            </p>
            <Button
              className="btn-avis btn-minus"
              onClick={() => handleClickAvis(-1)}
            >
              -1
            </Button>
            <Button
              className="btn-avis btn-plus"
              onClick={() => handleClickAvis(+1)}
            >
              +1
            </Button>
          </div>
          <div>
            <p className="movie-section">
              Avis Global: {createStars(10, newRatingMovie)}{" "}
              <span className="num-avis-global">({newCountRating})</span>
            </p>
          </div>
          <div>
            <p className="movie-section">{props.movieName}</p>
          </div>
          <CardText className="movie-summary">{props.movieDesc}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
