import { Link } from "react-router-dom";

const FileNotFound = () => {
    return ( 

        <div className="fileNotFound">
            <h1>the page you are looking for is missed.</h1>
            <Link to='/'><button>Home</button></Link>
        </div>
     );
}
 
export default FileNotFound;