import CreateMovies from './CreateMovies';
import Home from './Home';
import Navbar from './Navbar';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import MovieDetails from './MovieDetails';
import FileNotFound from './FileNotFound';
import UpdateMovie from './UpdateMovie';

function App() {

  return (
<Router>
  <div className="App">
    <Navbar heading = "My Movies"/>

    <Switch>
      <Route exact path={"/"}>
        <Home/>
      </Route>

      <Route exact path={"/create"}>
        <CreateMovies/>
      </Route>

      <Route path={"/movie:id"}>
        <MovieDetails/>
      </Route>

      <Route exact path={"/update:id"}>
        <UpdateMovie/>
      </Route>

      <Route path={"*"}>
        <FileNotFound/>
      </Route>


    </Switch>

  </div>

</Router>
  );
}

export default App;