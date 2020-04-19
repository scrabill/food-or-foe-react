import React from 'react';
import Leaderboard from './Leaderboard'
import Gameboard from './Game/Gameboard'
import './App.css';

function App() {

  class Nav extends React.Component {
    render() {
      return (
        <div>
          How to Play | Leaderboard
        </div>
      );
    }
  }

  class Instruction extends React.Component {
    render() {
      return (
        <div>
          <h2>{this.props.headline}</h2>
          <p>How many food emoji can you correctly identify in 30 seconds?</p>
          <p>Each correct answer is worth 1 point. A wrong answer decreases your score by 1 point.</p>
          <p>At the end of a round, add your name and score to the leaderboard!</p>
          <p>Happy guessing!</p>
        </div>
      );
    }
  }

  class Footer extends React.Component {
    render() {
      return (
        <div>
          Github | Blog Post
        </div>
      )
    }
  }

  return (
    <div className="App">
      <Nav />
      <Instruction headline="How to Play" />
      <Gameboard currentTime="30" currentScore="0" />
      <Leaderboard headline="Leaderboard" />
      <Footer />
    </div>
  );
}

export default App;
