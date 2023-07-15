import React from 'react'

const JokeCard = ({ joke }) => {
  return (
    <div className="joke-card">
        <h3>{joke.setup}</h3>
        <p>{joke.punchline}</p>
    </div>
  )
}

export default JokeCard