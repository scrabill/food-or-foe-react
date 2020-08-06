import React from 'react'

export default class PlayerInput extends React.Component {

  state = {
    playerName: ''
  }

  createGame(gameObj) {
    fetch("http://localhost:3000/api/v1/games", {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(gameObj)
    })
    .then(res => res.json())
  }

  handleOnChange = (e) => {
    this.setState({
      playerName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let gameObj = {
      score: this.props.currentScore,
      name: this.state.playerName
    }

    this.props.saveScore(gameObj)
    this.createGame(gameObj)

    this.setState({
      playerName: ''
    })

  }


  render() {
    let disabled = ''

    if (this.props.activeGame === true || this.props.currentScore === 0) {
      disabled = true
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter player name" value={this.state.playerName} onChange={this.handleOnChange} disabled={disabled} required/>
        <input type="submit" disabled={disabled}/>
      </form>
    );
  }
}
