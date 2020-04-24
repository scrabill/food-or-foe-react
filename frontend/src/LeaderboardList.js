import React from 'react'

export default class LeaderboardList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.scores.map(item => <li key={item.id}>{item.score} - {item.user.name}</li>)}
        </ul>
      )
    }
}
