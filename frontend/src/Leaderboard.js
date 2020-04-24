import React from 'react'
import LeaderboardList from './LeaderboardList'

import { connect } from 'react-redux'

class Leaderboard extends React.Component {

  componentDidMount() {
    let scores = []

    fetch('http://localhost:3000/api/v1/games')
    .then(r => r.json())
    .then(r => {
      r.forEach(element => scores.push(element))
      this.props.loadScores(scores)
    })
  }

  render() {
    // const sampleScores = [{"score": 1000, "name": "Shannon"},{"score": 3434, "name": "Kira"},{"score": 1701, "name": "Squire"}]
    return (
      <div>
        <h2>Leaderboard</h2>
        <LeaderboardList scores={this.props.scores}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    scores: state.scores
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadScores: (scores) => dispatch({ type: 'LOAD_SCORES', scores})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
