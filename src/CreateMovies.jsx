import { useState } from "react";
import {useHistory} from 'react-router-dom'

const CreateMovies = () => {

    let history = useHistory()

    const [movieName, setMovieName] = useState("")
    const [hero, setHero] = useState("")
    const [heroine, setHeroine] = useState("")
    const [genere, setGenere] = useState("")
    const [director, setDirector] = useState("")
    const [rating, setRating] = useState("")
    const [story, setStory] = useState("")
    const [trailer, setTrailer] = useState("")

    // console.log(movieName, hero, heroine);
    let handleSubmit = (e)=>{
        e.preventDefault();

        let movie = {movieName,hero,heroine,genere,director,rating,story,trailer}
        
        // console.table(movie);

        fetch("http://localhost:3000/movies", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(movie)
        })
        .then(()=>{
            // history.go(-1)
            history.push("/")
        })
    }



    return ( 
        <form id="addMovie" onSubmit={handleSubmit}>
            <h1>Add new Movie</h1>
            <div className="field">
                <label className="label" htmlFor="movieName">Movie name:</label>
                <input className="input" type="text" value={movieName} onChange={(event)=>{setMovieName(event.target.value)}} id="movieName"/>
            </div>
            <div className="field">
                <label className="label" htmlFor="hero">Hero:</label>
                <input className="input" type="text" value={hero}  onChange={(e)=>{setHero(e.target.value)}} id="hero"/>
            </div>
            <div className="field">
                <label className="label" htmlFor="heroine">Heroine:</label>
                <input className="input" type="text" value={heroine} onChange={(event)=>{setHeroine(event.target.value)}}  id="heroine"/>
            </div>
            <div className="field">
                <label className="label" htmlFor="genere">Genere:</label>
                <input className="input" type="text" value={genere} onChange={(event)=>{setGenere(event.target.value)}}  id="genere"/>
            </div>
            <div className="field">
                <label className="label" htmlFor="director">Director:</label>
                <input className="input" type="text" value={director} onChange={(event)=>{setDirector(event.target.value)}}  id="director"/>
            </div>
            <div className="field">
                <label className="label" htmlFor="rating">Rating:</label>
                <input className="input" type="number" value={rating} onChange={(event)=>{setRating(event.target.value)}} id="rating"/>
            </div>
            <div className="field">
                <label className="label" htmlFor="story">Story:</label>
                <textarea className="input" rows="3" cols="20" value={story} onChange={(event)=>{setStory(event.target.value)}} id="story"></textarea>
            </div>
            <div className="field">
                <label className="label" htmlFor="trailer">Trailer link:</label>
                <input className="input" type="text" value={trailer} onChange={(event)=>{setTrailer(event.target.value)}} id="trailer"/>
            </div>
            <input type="submit" className="input"/>
        </form>
    );
}
 
export default CreateMovies;