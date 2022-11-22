import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
const Home = () => {

    const [blogs,setBlogs] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() =>{
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data);
            setLoading(true);
        })
    },[])

    return ( 
        <div className="p-[20px]">
            <div className="border-b-[5px] border-blue-500 font-bold py-[10px]">
                <h1 className="text-xl">All blogs</h1>
            </div>
            <div className="flex flex-col gap-[10px] py-[20px]">
            {loading &&
                blogs.map((blog) => (
                    <div className="border-blue-500 border-[2px] p-[10px] rounded-lg" key={blog.id}>
                      <Link to={`/blogs/${blog.id}`}>
                        <h3 className="font-bold text-[18px]">{blog.author}</h3>
                        <p>{blog.body}</p>
                      </Link>
                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default Home;