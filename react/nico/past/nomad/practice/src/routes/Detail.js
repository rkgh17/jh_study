import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <img src={movies.large_cover_image} />
          <h2>
            <Link to="/">Go home</Link>
          </h2>
        </div>
      )}
    </div>
  );
}
export default Detail;
