import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const renderScores = function (scores) {
    const scoreCards = scores.map((score, i) => {
      return (
        <div key={i} className="total-score">
          <h6 className="player-num">Player {i + 1}</h6>
          <h3 className="player-score">{score}</h3>
        </div>
      );
    });
    return scoreCards;
  };

  return (
    <>
      <button className="btn--top btn--return">
        <FontAwesomeIcon className="header-icon" icon={faCircleArrowLeft} />
      </button>
      <div className="total-scores">{renderScores(props.scores)}</div>

      <button className="btn--top btn--instruction">
        <FontAwesomeIcon className="header-icon" icon={faCircleInfo} />
      </button>
    </>
  );
}
