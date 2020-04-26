export const fetchEmojis = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_EMOJIS' })

    fetch('http://localhost:3000/api/v1/emojis')
    .then(r => {
      return r.json()
    })
    .then(rJSON => {
      dispatch({ type: 'LOAD_EMOJIS', emojis: rJSON })
    })
  }
}

export const fetchFoodEmojis = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FOOD_EMOJIS' })

    fetch('http://localhost:3000/api/v1/emojis/food')
    .then(r => {
      return r.json()
    })
    .then(rJSON => {
      dispatch({ type: 'LOAD_FOOD_EMOJIS', foodEmojis: rJSON.map(emoji => emoji.character) })
    })
  }
}
