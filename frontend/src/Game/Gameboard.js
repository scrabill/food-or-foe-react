import React from 'react'
import Emoji from './Emoji'
import Button from './Button'
import PlayerInput from './PlayerInput'

import { connect } from 'react-redux'

class Gameboard extends React.Component {

    // constructor(props) {
    //   super(props);
    //   this.state = {
        // currentTime: 30,
        // currentScore: 0,
        // currentEmoji: "🍔",
        // activeGame: false
    //   }
    // }

    render() {
      return (
        <div>
          <h3>Time Remaining: {this.props.currentTime}</h3>
          <h3>Score: {this.props.currentScore}</h3>
          <Emoji currentEmoji={this.props.currentEmoji}/>

          <br />

          <Button text="Start Game" startGame={this.props.startGame}/>
          <Button text="Food"/>
          <Button text="Foe"/>

          <PlayerInput saveScore={this.props.saveScore} currentScore={this.props.currentScore} />

        </div>
      );
    }

}

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime,
    currentScore: state.currentScore,
    currentEmoji: state.currentEmoji,
    activeGame: state.activeGame
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch({ type: 'START_GAME' }),
    saveScore: (name, score) => dispatch({ type: 'SAVE_SCORE', name, score })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
