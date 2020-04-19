import React from 'react'
import LeaderboardList from './LeaderboardList'

export default class Leaderboard extends React.Component {

  render() {
    const sampleScores = [{"score": 1000, "name": "Shannon"},{"score": 3434, "name": "Kira"},{"score": 1701, "name": "Squire"}]
    return (
      <div>
        <h2>{this.props.headline}</h2>
        <LeaderboardList scores={sampleScores}/>

      </div>
    )
  }

}
