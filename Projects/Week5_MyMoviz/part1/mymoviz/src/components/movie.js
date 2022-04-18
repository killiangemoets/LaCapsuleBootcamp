import React from "react";
import { Card, CardImg, CardBody, CardText, Button } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faVideo, faStar } from "@fortawesome/free-solid-svg-icons";

const createStars = function (numStars) {
  let stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<FontAwesomeIcon className="star-icon" icon={faStar} />);
  }
  return stars;
};

export default function Movie(props) {
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
              Like <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </p>
          </div>
          <div>
            <p className="movie-section">
              Nombre de Vues{" "}
              <FontAwesomeIcon className="camera-icon" icon={faVideo} />{" "}
              <span className="num-vues">{props.movieVues}</span>
            </p>
          </div>
          <div>
            <p className="movie-section">Mon avis: {createStars(10)}</p>
            <Button className="btn-avis btn-minus">-1</Button>
            <Button className="btn-avis btn-plus">+1</Button>
          </div>
          <div>
            <p className="movie-section">
              Avis Global: {createStars(10)}{" "}
              <span className="num-avis-global">
                ({props.globalCountRating})
              </span>
            </p>
          </div>
          <div>
            <p className="movie-section">{props.movieName}</p>
          </div>
          <CardText className="movie-summary">{props.globalRating}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
