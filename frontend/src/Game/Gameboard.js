import React from 'react'
import Emoji from './Emoji'
import Button from './Button'
import Timer from './Timer'
import PlayerInput from './PlayerInput'

import { connect } from 'react-redux'

class Gameboard extends React.Component {

    render() {
      return (
        <div>
          <Timer currentTime={this.props.currentTime} activeGame={this.props.activeGame} setTime={this.props.setTime}/>
          <h3 id="feedback"></h3>
          <h3>Score: {this.props.currentScore}</h3>
          <Emoji currentEmoji={this.props.currentEmoji} emojis={this.props.emojis}/>

          <br />

          <Button text="Start Game" startGame={this.props.startGame} setTime={this.props.setTime} currentTime={this.props.currentTime}/>
          <Button text="Food" guess={this.props.guess} emojis={this.props.emojis} foodEmojis={this.props.foodEmojis} currentEmoji={this.props.currentEmoji} updateScore={this.props.updateScore} updateEmoji={this.props.updateEmoji} activeGame={this.props.activeGame}/>
          <Button text="Foe" guess={this.props.guess} emojis={this.props.emojis} foodEmojis={this.props.foodEmojis} currentEmoji={this.props.currentEmoji} updateScore={this.props.updateScore} updateEmoji={this.props.updateEmoji} activeGame={this.props.activeGame}/>

          <PlayerInput saveScore={this.props.saveScore} currentScore={this.props.currentScore} activeGame={this.props.activeGame}/>

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
    updateScore: (point) => dispatch({ type: 'UPDATE_SCORE', point}),
    updateEmoji: (emoji) => dispatch({ type: 'UPDATE_EMOJI', emoji})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);
