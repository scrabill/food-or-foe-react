import React from 'react'
import { randomEmoji } from './Emoji'

export default class Button extends React.Component {
  startGame() {
    this.props.startGame()
  }

  makeAGuess(myGuess) {

    let isFood = this.props.foodEmojis.includes(this.props.currentEmoji);

    // console.log("The current emojis is " + this.props.currentEmoji + " I guessed that it is " + myGuess + ". It is " + isFood + " that it is food.")

    if (isFood === true) {

      if (myGuess === "Food") {
        this.props.updateScore(1)
        console.log("Correct!")
      } else {
        this.props.updateScore(-1)
        console.log("Wrong :(")
      }

    } else {

      if (myGuess === "Foe") {
        this.props.updateScore(1)
        console.log("Correct")
      } else {
        this.props.updateScore(-1)
        console.log("Wrong :(")
      }
    }

    // Randomly get a new emoji and make it the currentEmoji
    this.props.updateEmoji(randomEmoji(this.props.emojis).character)

  }


  handleClick = (e) => {
    switch (e.target.innerText) {
      case "Start Game":
        this.startGame();
        break;
      case "Food":
        this.makeAGuess(e.target.innerText);
        break;
      case "Foe":
        this.makeAGuess(e.target.innerText);
        break;
      default:
        // this.props.startGame();
        return
    }
  }

  render() {
    let disabled = ''

    if (this.props.text !== "Start Game" && this.props.activeGame === false) {
      disabled = true
    }

    return (
      <button onClick={(e) => this.handleClick(e)} disabled={disabled}>
      {this.props.text}
      </button>
    );
  }
}
