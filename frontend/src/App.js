import React from 'react';
import Leaderboard from './Leaderboard'
import Gameboard from './Game/Gameboard'
import './App.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

function App() {

  class Nav extends React.Component {
    render() {
      return (
        <div>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/about">About</NavLink> |
          <NavLink to="/how-to-play">How to Play</NavLink> |
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </div>
      );
    }
  }

  // TODO: Abstract About and Instruction into a shared component
  class About extends React.Component {
    render() {
      return (
        <div>
          <h2>About</h2>
          <p>This game is rad and I think you should play it.</p>
        </div>
      );
    }
  }

  class Instruction extends React.Component {
    render() {
      return (
        <div>
          <h2>How To Play</h2>
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
          <em>Food or Foe?</em> created by Shannon Crabill
        </div>
      )
    }
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Gameboard}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/how-to-play" component={Instruction} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
