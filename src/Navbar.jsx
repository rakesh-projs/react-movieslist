import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = ({ heading }) => {
  let history = useHistory();

  let [search, setSearch] = useState();

  let handleSearch = () => {
    fetch("http://localhost:3500/movies")
      .then((res) => {
        return res.json();
      })
      .then((movies) => {
        movies.forEach((movie) => {
          if (movie.movieName.toUpperCase().includes(search.toUpperCase())) {
            let id = movie.id;
            history.push(`/movie${id}`);            
          }
        });

      });
  };

  return (
    <nav>
      <div id="navbar">
        <h1>{heading}</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/create">Add new movie</Link>
        </div>
      </div>
      <div className="searchBox">
        <input type="search"
          value={search} onChange={(e) => {setSearch(e.target.value);}}/>
        <button onClick={handleSearch} id="search">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
