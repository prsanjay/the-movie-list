import { useState, useEffect } from 'react';
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTION = {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
}
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTION);
      if(!response.ok){
        throw new Error('Error while fetching movies');
      }

      const data = await response.json();
      setMovies(data.results);

    } catch(error){
      console.error(`Error while fetching movies ${error}`)
      setErrorMessage('Error fetching movies. Please try after sometime.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies();
  },[])

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero image" />
          <h1>Find <span className="text-gradient">Movies</span> You will Enjoy!</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? 
            <p className='text-white'>Loading...</p>
          : errorMessage ? <p className="text-red-500">{errorMessage}</p> :
            <ul>
              {movies.map((movie: any) =>
                <MovieCard key={movie.id} movie={movie} />
              )}
            </ul>
          }
        </section>
      </div>
    </main>
  )
}

export default App;