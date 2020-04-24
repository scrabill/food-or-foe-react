export default function gameReducer(state = {
  currentTime: 30,
  currentScore: 0,
  currentEmoji: "🍔",
  activeGame: false,
  scores: []
}, action) {
  switch (action.type) {
    case "START_GAME":
        console.log("The game has started")
        return {
          ...state,
          currentTime: 30,
          activeGame: true
        }
    case "SAVE_SCORE":
        console.log("Saving your score")
        return {
          ...state,
          playerName: action.name
        }
    case "LOAD_SCORES":
        console.log("Loading scores")
        return {
          ...state,
          scores: action.scores
        }
    case "GUESS":
        console.log("Calculating guess")
        return {
          ...state,
          scores: action.scores
        }
    case 'SET_TIME':
        if (state.currentTime >= 1) {
          return {
            ...state,
            currentTime: state.currentTime - 1
          }
        } else {
          return state
        }

    default:
      return state
  }
}
