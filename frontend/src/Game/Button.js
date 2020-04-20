import React from 'react'

export default class Button extends React.Component {
  handleClick = () => {
    this.props.startGame()
  }
  render() {
    return (
      <button onClick={this.handleClick}>
      {this.props.text}
      </button>
    );
  }
}
