import React from 'react'
import JokeCard from './JokeCard'
import { useState, useEffect } from 'react';

const JokeList = ({ jokes, isLoading, fetchError }) => { 
  const [showJokes, setShowJokes] = useState([]);

  useEffect(() => {
    // Update showJokes with the latest 5 jokes from the jokes array
    setShowJokes((prevShowJokes) => {
      const startIndex = jokes.length >= 5 ? jokes.length - 5 : 0;
      return jokes.slice(startIndex);
    });
  }, [jokes]);

  console.log(showJokes)

  return (
    <div className="joke-container">
      {showJokes.length > 0 ? (
        showJokes.map((joke) => (
          <div key={joke.id} className="joke-card">
            <JokeCard joke={joke} />
            <p>ID: {joke.id}</p>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
          </div>
        ))
      ) : (
        <p>No jokes available</p>
      )}
      {fetchError && <p>Error: {fetchError}</p>}
      <div>hello</div>
    </div>
  )
}

export default JokeList