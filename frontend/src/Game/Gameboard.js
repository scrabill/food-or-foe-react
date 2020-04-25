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

          <Button text="Start Game" startGame={this.props.startGame} setTime={this.props.setTime} currentTime={this.props.currentTime}/>
          <Button text="Food" guess={this.props.guess} emojis={this.props.emojis} foodEmojis={this.props.foodEmojis} currentEmoji={this.props.currentEmoji} updateScore={this.props.updateScore}/>
          <Button text="Foe" guess={this.props.guess} emojis={this.props.emojis} foodEmojis={this.props.foodEmojis} currentEmoji={this.props.currentEmoji} updateScore={this.props.updateScore}/>

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
    activeGame: state.activeGame,
    emojis: state.emojis,
    foodEmojis: state.foodEmojis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch({ type: 'START_GAME' }),
    saveScore: (name, score) => dispatch({ type: 'SAVE_SCORE', name, score }),
    guess: (guess) => dispatch({ type: 'GUESS', guess}),
    setTime: () => dispatch({ type: 'SET_TIME'}),
    updateScore: (point) => dispatch({ type: 'UPDATE_SCORE', point})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
