import { useParams } from "react-router-dom";
import { useState } from "react";
// import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";




const UpdateMovie = () => {

    let {id} = useParams()
    let history = useHistory()

    const [movieName, setMovieName] = useState("")
    const [hero, setHero] = useState("")
    const [heroine, setHeroine] = useState("")
    const [genere, setGenere] = useState("")
    const [director, setDirector] = useState("")
    const [rating, setRating] = useState("")
    const [story, setStory] = useState("")
    const [trailer, setTrailer] = useState("")

    const handleUpdate = (e)=>{
        e.preventDefault()

        let newMovie = {movieName, hero, heroine,genere, director,rating,story,trailer}

        fetch(`http://localhost:3600/movies/${id}`,
        {
            method: "PUT",
            headers: {"Accept": "application/json",
                        "Content-Type": "application/json"},
            body: JSON.stringify(newMovie)
        })
        .then(()=>{alert("updated");
        console.log(id);
                    history.push("/")})
        
        

    }

    return ( 
        <div>
            <form id="addMovie" onSubmit={handleUpdate}>
            <h1>Update Movie Details</h1>
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
            <input type="submit" className="input" value="Update"/>
        </form>
        </div>
     );
}
 
export default UpdateMovie;