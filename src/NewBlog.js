import { useState } from "react";
import { useHistory } from "react-router-dom";
const NewBlog = () => {

    const [author,setAuthor] = useState('');
    const [body,setBody] = useState('');
    const history = useHistory();
    
    const addBlog = (e) => {
        e.preventDefault()
        const tmpBlog = {author:author,body:body};
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(tmpBlog)
        }
        ).then(() => {
            console.log("Blog added")
            history.push("/");
        })
        setAuthor('');
        setBody('');
    }

    return ( 
        <div className="p-[20px] flex flex-col gap-[150px]">
            <div className="border-b-[5px] border-blue-500 font-bold py-[10px]">
                <h1 className="text-xl">Add blog</h1>
            </div>
            <form className=" flex flex-col w-[600px] mx-auto p-[25px] bg-gray-200 gap-[10px] rounded-lg" onSubmit={addBlog}>
                <label htmlFor="author" className="font-bold">Add name: </label>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} className="p-[5px]"/>
                <label htmlFor="author" className="font-bold">Add text: </label>
                <textarea required className="h-[150px] p-[5px]" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button className="bg-blue-500 text-white py-[10px]">Add blog</button>
            </form>
        </div>
     );
}
 
export default NewBlog;