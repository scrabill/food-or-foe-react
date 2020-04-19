import React from 'react'

export default class LeaderboardList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.scores.map(item => <li>{item.score} - {item.name}</li>)}
        </ul>
      )
    }
}
