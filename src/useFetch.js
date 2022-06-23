import {useState, useEffect} from 'react';


const useFetch = (request) => {
    var [data, setData] = useState(null)
    var [pending, setPending] = useState(true)
    var [error, setError] = useState(null)
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(request)
            .then((response)=>{if(response.ok == false)
                {
                    throw Error("Data not Found! Please provide proper address")
                }
                // console.log(response);
                return response.json()})
            .then((data)=>{setData(data); setPending(false)})
            .catch((error)=>{setError(error.message); setPending(false)})
        },300)
    },[])

    return {data, pending, error}
}
 
export default useFetch;