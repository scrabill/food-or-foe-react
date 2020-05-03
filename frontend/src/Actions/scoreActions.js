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
