import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setBlogs] = useState();
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(() =>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Page not Found");
            }
            return res.json()
        })
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