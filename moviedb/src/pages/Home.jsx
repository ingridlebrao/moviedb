import { useEffect, useState } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topMoviesURL = `${moviesURL}popular?${apiKEY}`;
    console.log(topMoviesURL);
    getTopMovies(topMoviesURL);
  }, []);

  return (
    <div>
      {topMovies &&
        topMovies.map((movie) => {
          <p>${movie.title}</p>;
        })}
    </div>
  );
};

export default Home;
