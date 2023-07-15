import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import JokeList from "./JokeList";
import SingleJoke from "./SingleJoke";

function App() {
  const URL = "https://official-joke-api.appspot.com/random_joke"

  const [jokes, setJokes] = useState([])
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get(URL);
        const jokeData = response.data;
        setJokes((prevJokes) => [...prevJokes, jokeData]);
      } catch (err) {
        console.log(err);
        setFetchError(err.message);
      } finally {
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
        fetchError={fetchError}
      />} />
      <Route path=":id" element={<SingleJoke jokes={jokes}/>} />
    </Routes>
  );
}

export default App;
