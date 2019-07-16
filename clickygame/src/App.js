import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import './styles/App.css';

class App extends Component {
  state = {
    cards,
    clickedCards: [],
    score: 0
  };

  cardClick = event => {
    const currentCard = event.target.id
    console.log(currentCard)

    const cardClicked =
      this.state.clickedCards.indexOf(currentCard) > -1;

  if (cardClicked) {
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
        clickedCards: this.state.clickedCards.concat(currentCard),
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
          {this.state.cards.map(card=> (
            <Card
              cardClicked={this.cardClicked}
              className={card.className}
              key={card.className}
              name={card.name}
              image={card.image}
            />
          ))}
        </div>
        <Wrapper />
      </div>
    );
  }
}

export default App;
