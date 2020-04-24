import React from 'react'

export default class Button extends React.Component {
  startGame() {
    this.props.startGame()
    this.startTimer()
  }

  startTimer() {
    let time = this.props.currentTime
    const runTimer = this.props.setTime.bind(this)

    let printTime = setInterval(function() {
        time--;
        runTimer()
        if (time <= 0) clearInterval(printTime);
    }, 1000);
  }

  handleClick = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Start Game":
        this.startGame();
        break;
      case "Food":
        console.log("The food button was clicked");
        this.props.guess(e.target.innerText);
        break;
      case "Foe":
        console.log("The foe button was clicked");
        this.props.guess(e.target.innerText);
        break;
      default:
        // this.props.startGame();
        return
    }
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
      {this.props.text}
      </button>
    );
  }
}
