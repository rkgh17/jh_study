import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ a, b, c, d, id }) {
  return (
    <div>
      <hr />
      <img src={a} alt={b} />
      <h2>
        <Link to={`movie/${id}`}>{b}</Link>
      </h2>
      <p>{c}</p>
      <ul>{d && d.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired,
  d: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
