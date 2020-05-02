import React from 'react';
import { NavLink} from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/how-to-play">How to Play</NavLink>
      <NavLink to="/leaderboard">Leaderboard</NavLink>
    </nav>
  );
}
