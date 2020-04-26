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

  displayEmoji() {
    console.log(this.props.currentEmoji)
  }


  render() {
    return (
      <span>{this.props.currentEmoji}</span>
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

// export const randomEmoji = () => {
//   // console.log(props)
//   let emojis = this.props.emojis.bind(this)
//   // console.log(this.emojis)
//
//   return (
//     emojis[Math.floor(Math.random() * emojis.length)]
//   )
// }

export default connect(mapStateToProps, mapDispatchToProps)(Emoji);
