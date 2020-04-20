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
          activeGame: !state.activeGame
        }
    default:
      return state
  }
}
