import React, { Component } from 'react';
import Jumbotron from  "./components/Jumbotron";
import Game from "./components/Game";
import './App.css';

class App extends Component {
  // state = {
  //   score: 0,
  //   guessed: [],
  //   message: ""
  // }

  // handleClick(e) {
  //   const clicked = e.target.dataset.id
  //   if (this.state.guessed.indexOf(clicked) > -1) {
  //     this.setState({
  //       score: 0,
  //       guessed: [],
  //       message: "You lose!"
  //     })
  //   } else if (this.state.score === 12) {
  //     this.setState({
  //       score: 0,
  //       guessed: [],
  //       message: "You win!"
  //     })
  //   } else {
  //     this.setState({
  //       score: this.state.score + 1,
  //       guessed: this.state.guessed.concat(clicked),
  //       message: ""
  //     })
  //   }
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Time To Get Clicky!</h1>
          <h1 className="Score">Score: 0 | High Score: 0</h1>
        </header>
        <div className="Jumbotron">
          <Jumbotron />
        </div>
        <div className="Game">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
