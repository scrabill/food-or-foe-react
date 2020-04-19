import React from 'react'

export default class Emoji extends React.Component {
  render() {
    return (
      <span>{this.props.currentEmoji}</span>
    );
  }
}
