import { useEffect, useState } from 'react';
import {useParams,useHistory} from 'react-router-dom';
const BlogDetails = () => {
    
    const [blog,setBlogs] = useState();
    const [loading,setLoading] = useState(false);

    const {id} = useParams();

    const history = useHistory();

    useEffect(() =>{
        fetch('http://localhost:8000/blogs/'+id)
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            setLoading(true);
        })
    },[])

    const handeleDelete = (id) => {
        fetch('http://localhost:8000/blogs/'+id,{
            method:"DELETE"
        }).then(()=>{
            console.log("DELETED")
            history.push("/")
        })
    }

    return ( 
        <>
         {loading &&
             <div key={blog.id} className="p-[20px]">
                <h1 className='font-bold text-2xl py-[20px]'>{blog.author}</h1>
                <p className='py-[10px]'>{blog.body}</p>
                <button onClick={() => handeleDelete(blog.id)} className="bg-blue-500 text-white py-[10px] px-[15px]">Delete blog</button>
            </div>
        }
        </>
    );
}
 
export default BlogDetails;