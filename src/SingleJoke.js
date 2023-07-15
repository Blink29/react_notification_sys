import React from 'react'
import { useParams } from 'react-router-dom'

const SingleJoke = ({jokes}) => {
  const {id} = useParams()
  const joke = jokes.find((joke) => (joke.id).toString() === id)

  return (
    <div>
      <h3>{joke.setup}</h3>
      <p>{joke.punchline}</p>
    </div>
  )
}

export default SingleJoke