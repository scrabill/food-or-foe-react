export const fetchScores = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES' })

    fetch('http://localhost:3000/api/v1/games/leaderboard')
    .then(r => {
      return r.json()
    })
    .then(rJSON => {
      dispatch({ type: 'LOAD_SCORES', scores: rJSON })
    })
  }
}

// export const fetchCats = () => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS'})
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
//     .then(response => {
//       return response.json()
//     })
//     .then(responseJSON => {
//       dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//     })
//   }
// }

// fetch('http://localhost:3000/api/v1/games')
// .then(r => r.json())
// .then(r => {
//   r.forEach(element => scores.push(element))
//   this.props.loadScores(scores)
// })
