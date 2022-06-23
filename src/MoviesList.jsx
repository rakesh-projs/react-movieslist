import {Link} from 'react-router-dom'


const MoviesList = ({movies,title}) => {
    return (
        <div className="moviesList">
            <h1>{title}</h1>
            {movies.map((movie)=>
                (
                    <Link to={`/movie${movie.id}`}>

                       <div className="Movies">
                            <img src={movie.poster} style={{width:"200px", height:"auto"}} />
                            <h2>Movie: {movie.movieName}</h2>
                            <div>
                            <h3>Hero: {movie.hero}</h3>
                            <h3>Heroine: {movie.heroine}</h3>
                            </div>
                            <div>
                            <h3>Genere: {movie.genere}</h3>
                            <h3>Director: {movie.director}</h3>
                            </div>
                            <h3>Rating: {movie.rating}</h3>
                        </div>
                    </Link>                    
                )
            )}
        </div>        
    );
}

export default MoviesList;

