import React from 'react'

export default class PlayerInput extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter player name" />
        <input type="submit" />
      </form>
    );
  }
}
