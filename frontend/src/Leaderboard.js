import React from 'react'
import { LeaderboardList } from './LeaderboardList'
import { fetchScores } from './Actions/scoreActions'

import { connect } from 'react-redux'

class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.fetchScores()
  }

  render() {
    if (this.props.loadingScores === true) {
      return (
        <div>
          <h2>Leaderboard</h2>
          "Beep. Boop. Loading scores..."
        </div>
      )
    } else {
      return (
        <div>
          <h2>Leaderboard</h2>
          <LeaderboardList scores={this.props.scores}/>
        </div>
      )
    }

  }

}

const mapStateToProps = state => {
  return {
    scores: state.scores,
    loadingScores: state.loadingScores
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchScores: () => dispatch(fetchScores())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
