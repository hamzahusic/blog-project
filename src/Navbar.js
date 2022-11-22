import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className='bg-blue-900 flex flex-col text-white p-[20px] gap-[40px] absolute top-0 left-0 bottom-0 w-[200px]'>
            <div className="text-xl text-center">
                <h1>Navigation</h1>
            </div>
            <div className="flex flex-col gap-[20px] text-[17px]">
                <Link to="/">Home</Link>
                <Link to="/NewBlog" className='bg-blue-400 px-[15px] py-[10px] text-center'>New Blog</Link>
            </div>
        </div>   
     );
}
 
export default Navbar;