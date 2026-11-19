import { useParams, useNavigate, useLocation, Link, Outlet } from "react-router";
import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../api";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(backLink.current)}>Go Back</button>
      <h2>{movie.title}</h2>
      <img
        src={movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : "https://via.placeholder.com/200x300"}
        alt={movie.title}
      />
      <p>{movie.overview}</p>

      <Link to="info">Cast and Reviews</Link>
      <Outlet />
    </div>
  );
}

export default Movie;
