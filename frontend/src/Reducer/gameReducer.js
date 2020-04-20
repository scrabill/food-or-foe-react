export default function gameReducer(state = {
  currentTime: 30,
  currentScore: 0,
  currentEmoji: "🍔",
  activeGame: false
}, action) {
  switch (action.type) {
    case "START_GAME":
        console.log("The game has started")
        return {
          ...state,
          activeGame: true
        }
    case "SAVE_SCORE":
        console.log("Saving your score")
        return {
          ...state,
          playerName: action.name
        }
    default:
      return state
  }
}
