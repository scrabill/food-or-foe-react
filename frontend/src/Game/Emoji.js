import React from 'react'

import { fetchEmojis, fetchFoodEmojis } from '../Actions/emojiActions'
import { connect } from 'react-redux'

export const randomEmoji = (emojis) => {
  return (
    emojis[Math.floor(Math.random() * emojis.length)]
  )
}

class Emoji extends React.Component {

  componentDidMount() {
    this.props.fetchEmojis()
    this.props.fetchFoodEmojis()
  }

  render() {
    return (
      <h1>{this.props.currentEmoji}</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    emojis: state.emojis,
    loadEmojis: state.loadingEmojis,
    foodEmojis: state.foodEmojis,
    loadingFoodEmojis: state.loadingFoodEmojis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEmojis: () => dispatch(fetchEmojis()),
    fetchFoodEmojis: () => dispatch(fetchFoodEmojis()),
    updateEmoji: (emoji) => dispatch({ type: 'UPDATE_EMOJI', emoji}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emoji);
