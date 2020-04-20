import React from 'react'

export default class PlayerInput extends React.Component {

  state = {
    playerName: ''
  }

  handleOnChange = (e) => {
    this.setState({
      playerName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.currentScore)
    let gameObj = {
      score: this.props.currentScore,
      name: e.target.value
    }
    this.props.saveScore(gameObj)

    this.setState({
      playerName: ''
    })

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter player name" value={this.state.playerName} onChange={this.handleOnChange} />
        <input type="submit" />
      </form>
    );
  }
}
