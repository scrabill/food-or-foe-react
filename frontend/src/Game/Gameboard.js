import React from 'react'
import Emoji from './Emoji'
import Button from './Button'
import PlayerInput from './PlayerInput'

export default class Gameboard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentTime: 30,
        currentScore: 0,
        currentEmoji: "🍔",
        activeGame: true
      }
    }

    render() {
      return (
        <div>
          <h3>Time Remaining: {this.state.currentTime}</h3>
          <h3>Score: {this.state.currentScore}</h3>
          <Emoji currentEmoji={this.state.currentEmoji}/>

          <br />

          <Button text="Start Game"/>
          <Button text="Food" activeGame={this.state.activeGame}/>
          <Button text="Foe"/>

          <PlayerInput activeGame={this.state.activeGame} />

        </div>
      );
    }

}
