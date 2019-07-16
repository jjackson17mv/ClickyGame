import React from "react";
import "../../styles/header.css"

const Header = props => (
  <div id="header">
    <div id="title">{props.children}</div>
    <div id="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;