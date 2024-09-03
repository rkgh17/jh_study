import { useState, useEffect } from "react";
import Movie from "../components/Movie";

// MovieApp
function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  // 기존에 fetch방법 -> async await방법으로 변경
  //   useEffect(() => {
  //     fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setMovies(json.data.movies);
  //         setLoding(false);
  //       });
  //   }, []);
  //   console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              a={movie.medium_cover_image}
              b={movie.title}
              c={movie.summary}
              d={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
