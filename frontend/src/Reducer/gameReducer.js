export default function gameReducer(state = {
  currentTime: 0,
  currentScore: 0,
  currentEmoji: "🍔",
  activeGame: false,
  scores: [],
  loadingScores: false,
  emojis: [],
  loadingEmojis: false,
  foodEmojis: [],
  loadingFoodEmojis: false,
}, action) {
  switch (action.type) {
    case "START_GAME":
        return {
          ...state,
          currentScore: 0,
          currentTime: 30,
          activeGame: true
        }
    case "SAVE_SCORE":
        return {
          ...state,
          playerName: action.name,
          currentScore: 0
        }
    case "LOADING_SCORES":
        return {
          ...state,
          scores: state.scores,
          loadingScores: true
        }
    case "LOAD_SCORES":
        return {
          ...state,
          scores: action.scores,
          loadingScores: false
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
    case "LOADING_EMOJIS":
        return {
          ...state,
          emojis: state.emojis,
          loadingEmojis: true
        }
    case "LOAD_EMOJIS":
        return {
          ...state,
          emojis: action.emojis,
          loadingEmojis: false
        }
    case "LOADING_FOOD_EMOJIS":
        return {
          ...state,
          foodEmojis: state.foodEmojis,
          loadingFoodEmojis: true
        }
    case "LOAD_FOOD_EMOJIS":
        return {
          ...state,
          foodEmojis: action.foodEmojis,
          loadingFoodEmojis: false
        }
    case "UPDATE_EMOJI":
        return {
          ...state,
          currentEmoji: action.emoji
        }
    case "GUESS":
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
          return {
            ...state,
            currentTime: 0,
            activeGame: false
          }
        }

    default:
      return state
  }
}
