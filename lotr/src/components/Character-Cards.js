import React from "react";
import "../style.css"

function Characters(props) {
    return (
        
        <img className="lotr-image" alt={props.name} src={props.image} onClick={() => props.imageClick(props.id)}></img>            
                
       

    );
}

export default Characters