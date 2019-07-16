import React from "react";
import "../../styles/card.css"

const Card = props => (
  <div className="card" onClick={() => props.cardCount(props.id)}>
  
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);



export default Card;