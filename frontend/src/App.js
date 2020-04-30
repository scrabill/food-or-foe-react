import React from 'react';
import Leaderboard from './Leaderboard'
import Gameboard from './Game/Gameboard'
import { Instruction } from './Instruction'
import { Nav } from './Nav'
import { About } from './About'
import { Footer } from './Footer'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

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
