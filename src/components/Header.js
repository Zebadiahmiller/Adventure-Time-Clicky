import React from "react";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid jum-bck">
            <div className="container text-center">
                <div className="status-text">Play the game by clicking and image! Careful not to click the same image twice!</div>
                <div className="status-text justify-content-left">{props.status}</div>
            </div>
        </div>
    );
}

export default Header