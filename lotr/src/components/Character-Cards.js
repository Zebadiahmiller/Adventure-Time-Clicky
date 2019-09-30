import React from "react";
import "../style.css"

function Characters(props) {
    return (
        <div>
            <img className="lotr-image" alt={props.name} src={props.image} />
            <span></span>
        </div>

    );
}

export default Characters