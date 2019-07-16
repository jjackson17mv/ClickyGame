import React from "react";
import "../../styles/card.css"

const Card = props => (
  <div id="card" onClick= {props.cardClick(props.id)}>
    <div id="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);



export default Card;