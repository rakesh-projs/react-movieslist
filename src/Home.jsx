import MoviesList from './MoviesList';
import useFetch from './useFetch';


const Home = () => {

    // movieName = 'RRR';
    // var [movies, setMovies] = useState(movies);

   let {data:movies, pending, error} = useFetch("http://localhost:3600/movies");




    return ( 
        <div className="home-content">
            {/* <h1 style={{color:'red', backgroundColor:'gold'}}>{movieName}</h1>
            <button onClick={()=>{clik()}}>change</button>
             */}
            {/* {movies.map((movie)=>
                (   <div>
                        <h2>Movie: {movie.movieName}</h2>
                        <h3>Hero: {movie.hero}</h3>
                        <h3>Heroine: {movie.heroine}</h3>
                        <h3>Genere: {movie.gener}</h3>
                        <h3>Director: {movie.director}</h3>
                        <h3>Rating: {movie.rating}</h3>
                    </div>
                )
            )} */}

            {pending &&
             <div>
                <h1 style={{display:"inline"}}>Loading...</h1>
                <div className='loading'></div>
            </div>}
            {error && <h1 style={{backgroundColor:"gold",color:"red"}}>{error}</h1>}
            {movies && <MoviesList movies={movies} title="All Movies!"/>}



            {/* <MoviesList movies={movies} title="action movies" />  */}
            {/* {movies && <MoviesList movies={movies.filter((movie)=>{return movie.gener.includes("Action")})} title="Action Movies"/>} */}
            {/* <MoviesList movies={movies.filter((movie)=> movie.rating>=9)} title="Top Rated Movies"/> */}

            {/* in the above line title and movies will be the properties for an object named 'props', we are sending these properties because in MoviesList whatever the data needed there is present here. so we are sharing the data to MoviesList when we are calling the MoviesList component.  */}

        </div>
    );
}
 
export default Home;