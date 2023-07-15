import React from 'react'
import { useState, useEffect } from 'react';
import JokeCard from './JokeCard'

const JokeList = ({ visibleJokes }) => { 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="joke-container">
      <>
      {visibleJokes.map((joke, index) => (
        <div
          key={joke.id}
          className={`joke-card ${index === currentIndex ? 'visible' : ''}`}
        >
          <JokeCard joke={joke} />
        </div>
      ))}
      <div>hello</div>
      </>
    </div>
  )
}

export default JokeList