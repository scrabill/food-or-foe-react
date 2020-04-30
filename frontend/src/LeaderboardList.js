import React from 'react'

export const LeaderboardList = (props) => {
  return (
    <ul>
      {props.scores.map(item => <li key={item.id}>{item.score} - {item.user.name}</li>)}
    </ul>
  )
}
