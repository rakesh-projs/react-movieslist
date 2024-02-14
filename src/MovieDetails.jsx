import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  let history = useHistory();

  const { id } = useParams();
  let {
    data: movie,
    pending,
    error,
  } = useFetch(`http://localhost:3600/movies/${id}`);

  const handleDelete = (id) => {
    fetch(`http://localhost:3600/movies/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  console.log("movie", movie);

  return (
    <div>
      {pending && (
        <div>
          <h1 style={{ display: "inline" }}>Loading...</h1>
          <div className="loading"></div>
        </div>
      )}
      {error && (
        <h1 style={{ backgroundColor: "gold", color: "red" }}>{error}</h1>
      )}
      {movie && (
        <div id="movieDetails">
          <h1>{movie.movieName}</h1>
          {movie.trailer.includes("youtube.com/embed/") && (
            // <iframe
            //   width="560"
            //   height="315"
            //   src={movie.trailer}
            //   title="YouTube video player"
            //   frameborder="0"
            //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //   allowfullscreen
            // ></iframe>
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
          <h3>
            {" "}
            <span>Hero:</span> {movie.hero}
          </h3>
          <h3>
            <span>Heroine:</span> {movie.heroine}
          </h3>
          <h3>
            <span>Genere:</span> {movie.genere}
          </h3>
          <h3>
            <span>IMDB Rating:</span> {movie.rating}
          </h3>
          <p>
            <h3>
              <span>Story:</span>
            </h3>
            {movie.story}
          </p>
          <button
            onClick={() => {
              handleDelete(movie.id);
            }}
          >
            Delete-movie
          </button>
          <Link to={`/update${movie.id}`}>
            <button>Update-movie</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
