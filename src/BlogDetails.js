import {useParams,useHistory} from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {

    const {id} = useParams();

    const history = useHistory();

    const {data:blog,loading,error} = useFetch('http://localhost:8000/blogs/'+id);

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
        {error && <h1>Something went wrong! Upss</h1>}
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