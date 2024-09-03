import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieDtl({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDtl.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDtl;
