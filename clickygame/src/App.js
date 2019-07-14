import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    clickedCards: [],
    score: 0
  };

  imageClick = event => {
    const currentCharacter = event.target.addEventListener;
    const characterClicked =
      this.state.clickedCards.indexOf(currentCharacter) > -1;

  if (characterClicked) {
    this.setState({
      cards: this.state.cards.sort(function(a,b) {
        return 0.5 - Math.random();
      }),
      clickedCards: [],
      score: 0
    });
      alert("No bueno");
  } else {
    this.setState(
      {
        cards: this.state.cards.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedCards: this.state.clickedCards.concat(
          currentCharacter
        ),
        score: this.state.score + 1
      },
      () => {
        if (this.state.score === 15) {
          alert("You are a beautiful mind");
          this.setState({
            cards: this.state.cards.sort(function(a,b) {
              return 0.5 - Math.random();
            }),
            clickedCards: [],
            score: 0
          });
        }
      }
    );
  }
  };
  render() {
    return (
      <div>
        <Header
          score={this.state.score}
        />
        <Wrapper />
        <div className="wrapper">
          {this.state.cards.map(cards => (
            <Card
              imageClick={this.imageClick}
              id={cards.id}
              key={cards.id}
              image={cards.image}
            />
          ))}
        </div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
