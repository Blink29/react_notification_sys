import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import JokeList from "./JokeList";
import SingleJoke from "./SingleJoke";

function App() {
  const URL = "https://official-joke-api.appspot.com/random_joke"

  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchJoke = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(URL);
        const jokeData = response.data;
        setJokes((prevJokes) => [...prevJokes, jokeData]);
      } catch (err) {
        console.log(err);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJoke();

    const intervalId = setInterval(fetchJoke, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(jokes);
  }, [jokes]);

  
  return (
    <Routes>
      <Route path="/" element={<JokeList 
        jokes = {jokes}
        isLoading={isLoading}
        fetchError={fetchError}
      />} />
      <Route path=":id" element={<SingleJoke />} />
    </Routes>
  );
}

export default App;
