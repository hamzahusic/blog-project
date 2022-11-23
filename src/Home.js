import {Link} from 'react-router-dom';
import useFetch from "./useFetch";
const Home = () => {

    const {data:blogs,loading,error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="p-[20px]">
            <div className="border-b-[5px] border-blue-500 font-bold py-[10px]">
                <h1 className="text-xl">All blogs</h1>
            </div>
            <div className="flex flex-col gap-[10px] py-[20px]">
            {!error && !loading && <h1 className='font-bold'>Loading ...</h1>}
            {error && <h1 className='font-bold'>Something went wrong! Upss</h1>}
            {loading &&
                blogs.map((blog) => (
                    <div className="border-blue-500 border-[2px] px-[15px] py-[20px] rounded-lg" key={blog.id}>
                      <Link to={`/blogs/${blog.id}`}>
                        <h3 className="font-bold text-[18px]">{blog.author}</h3>
                        <p>{blog.body.substring(0,70)+"..."}</p>
                      </Link>
                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default Home;