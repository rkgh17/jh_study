import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// https://brilliant-froyo-4c6888.netlify.app/

function Detail() {
  const [loading, setLoading] = useState(true);
  const { param } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${param}`
    );
    const json = await response.json();
    setLoading(false);
  };

  // api호출
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <div>Done!</div>}</div>;
}

export default Detail;
