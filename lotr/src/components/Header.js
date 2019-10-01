import React from "react";

function Header(props){
    return(
        <div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
  <div className ="status-text">{props.status}</div>
  </div>
</div>
    );
}

export default Header