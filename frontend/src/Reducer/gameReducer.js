export default function gameReducer(state = {
  currentTime: 30,
  currentScore: 0,
  currentEmoji: "🍔",
  activeGame: false,
  scores: [],
  emojis: [],
  foodEmojis: []
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
    case "UPDATE_SCORE":

      if (state.currentScore + action.point < 0) {
        state.currentScore = 0
      } else {
        return {
          ...state,
          currentScore: state.currentScore + action.point
        }
      }

    case "LOAD_EMOJIS":
        console.log("Loading emojis")
        return {
          ...state,
          emojis: action.emojis
        }
    case "LOAD_FOOD_EMOJIS":
        console.log("Loading emojis")
        return {
          ...state,
          foodEmojis: action.foodEmojis
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
