import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setBlogs] = useState();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            setLoading(true);
            setError(null);
        })
        .catch(err => {
            setError(err);
        })
    },[url])
    
    return {data,loading,error};
}
 
export default useFetch;