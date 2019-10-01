import React from "react";
import "../style.css"

function Scores(props){
    return(
  <div className="container">
<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light justify-content-center">
    <div className ="chars-scores"> CurrentScore: {props.score} HighScore: {props.highScore}</div>
    
</nav>
  </div>
    );
}

export default Scores