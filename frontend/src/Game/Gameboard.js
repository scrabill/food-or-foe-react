import React from 'react'
import Emoji from './Emoji'
import Button from './Button'
import PlayerInput from './PlayerInput'

export default class Gameboard extends React.Component {

    render() {
      return (
        <div>
          <h3>Time Remaining: {this.props.currentTime}</h3>
          <h3>Score: {this.props.currentScore}</h3>
          <Emoji currentEmoji={"🍔"}/>

          <br />

          <Button text="Start Game"/>
          <Button text="Food"/>
          <Button text="Foe"/>

          <PlayerInput />

        </div>
      );
    }

}
