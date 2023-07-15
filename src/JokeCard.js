import React from 'react'
import { Link } from 'react-router-dom'

const JokeCard = ({ joke }) => {
  return (
    <div className="joke-card">
      <Link to={`/${joke.id}`}>
        <h3>{joke.setup}</h3>
      </Link>
    </div>
  )
}

export default JokeCard