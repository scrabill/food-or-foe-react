import React from 'react'

import { connect } from 'react-redux'

class Emoji extends React.Component {

  componentDidMount() {
    let emojis = []

    fetch('http://localhost:3000/api/v1/emojis')
    .then(r => r.json())
    .then(r => {
      r.forEach(element => emojis.push(element))
      this.props.loadEmojis(emojis)
    })
  }

  displayEmoji() {
    console.log(this.props.currentEmoji)
  }

  randomEmoji() {
    this.props.currentEmoji = this.props.emojis[Math.floor(Math.random() * this.props.emojis.length)]
  }

  render() {
    return (
      <span>{this.props.currentEmoji}</span>
    );
  }
}

const mapStateToProps = state => {
  return {
    emojis: state.emojis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadEmojis: (emojis) => dispatch({ type: 'LOAD_EMOJIS', emojis})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emoji);
