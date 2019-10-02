import React from "react";
import "../style.css"

function Scores(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg fixed-top navbar-light justify-content-center" id ="score-color">
        <div className="status-text justify-content-left">{props.status}</div>
        <div className="chars-scores "><span>  </span> CurrentScore: {props.score} HighScore: {props.highScore}</div>
      </nav>

    </div>
  );
}

export default Scores