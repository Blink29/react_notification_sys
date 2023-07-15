import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import JokeList from "./JokeList";
import SingleJoke from "./SingleJoke";

function App() {
  const URL = "httpss://official-joke-api.appspot.com/random_joke"

  const [jokes, setJokes] = useState([])
  const [visibleJokes, setVisibleJokes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchJoke = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(URL)
        const jokeData = [response.data]
        setJokes(jokeData)
      } catch(err) {
          console.log(err)
          setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchJoke() 
  }, [jokes, setJokes])

  // useEffect(() => {

  // }, [jokes]);
  useEffect(() => {
      setVisibleJokes((prevJokes) => {
        const startIndex = prevJokes.length >= 5 ? prevJokes.length - 5 : 0;
        return jokes.slice(startIndex, startIndex + 5);
      });
  }, [jokes]);

  useEffect(() => {
    console.log(visibleJokes);
  }, [visibleJokes]);

  useEffect(() => {
    
  }, [jokes])

  return (
    <Routes>
      <Route path="/" element={<JokeList 
        visibleJokes={visibleJokes}
        isLoading={isLoading}
      />} />
      <Route path=":id" element={<SingleJoke />} />
    </Routes>
  );
}

export default App;
