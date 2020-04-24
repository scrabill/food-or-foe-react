import React from 'react'

export default class Button extends React.Component {
  handleClick = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Start Game":
        this.props.startGame();
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
