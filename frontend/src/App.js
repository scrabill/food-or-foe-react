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

  // class Gameboard extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h3>Time Remaining: {this.props.currentTime}</h3>
  //         <h3>Score: {this.props.currentScore}</h3>
  //         <Emoji currentEmoji={"🍔"}/>
  //
  //         <br />
  //
  //         <Button text="Start Game"/>
  //         <Button text="Food"/>
  //         <Button text="Foe"/>
  //
  //         <PlayerInput />
  //
  //       </div>
  //     );
  //   }
  // }
  //
  // class Button extends React.Component {
  //   render() {
  //     return (
  //       <button>
  //       {this.props.text}
  //       </button>
  //     );
  //   }
  // }
  //
  // class PlayerInput extends React.Component {
  //   render() {
  //     return (
  //       <form>
  //         <input type="text" placeholder="Enter player name" />
  //         <input type="submit" />
  //       </form>
  //     );
  //   }
  // }
  //
  // class Emoji extends React.Component {
  //   render() {
  //     return (
  //       <span>{this.props.currentEmoji}</span>
  //     );
  //   }
  // }

  // class Leaderboard extends React.Component {
  //   render() {
  //     const sampleScores = [{"score": 1000, "name": "Shannon"},{"score": 3434, "name": "Kira"},{"score": 1701, "name": "Squire"}]
  //     return (
  //       <div>
  //         <h2>{this.props.headline}</h2>
  //         <LeadboardList scores={sampleScores}/>
  //       </div>
  //     );
  //   }
  // }
  //
  // class LeadboardList extends React.Component {
  //   render() {
  //     return (
  //       <ul>
  //         {this.props.scores.map(item => <li>{item.score} - {item.name}</li>)}
  //       </ul>
  //     )
  //   }
  // }

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
