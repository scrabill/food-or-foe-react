import React from 'react'
import { randomEmoji } from './Emoji'

export default class Button extends React.Component {
  startGame() {
    this.props.startGame()
  }

  feedback = (i) => {
    let feedback = document.querySelector("#feedback")
    let text = ''

    const positive = [
      "Correct!",
      "Good job!",
      "Woo! Good guess.",
      "Right answer!",
      "Correct. You're good at this!"
    ]

    const negative = [
      "Sorry, wrong guess :(",
      "Nope!",
      "Try again!"
    ]

    i > 0 ? text = positive : text = negative

    feedback.innerText = text[Math.floor(Math.random() * text.length)]
  }

  makeAGuess(myGuess) {

    let i = 1

    let isFood = this.props.foodEmojis.includes(this.props.currentEmoji);

    if (isFood === true) {

      if (myGuess === "Food") {
        this.props.updateScore(i)
      } else {
        i = -1
        this.props.updateScore(i)
      }

    } else {

      if (myGuess === "Foe") {
        this.props.updateScore(i)
      } else {
        i = -1
        this.props.updateScore(i)
      }
    }

    this.feedback(i)
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
