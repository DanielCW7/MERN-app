import Item from "./item";
import connectDB from '../../lib/db';
import { set } from "mongoose";
import { useEffect, useState } from 'react'; 

const Collection = () => {

    

    const [posts, setPosts] = useState([]);

    useEffect(() => {    
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            const data = await res.json();
            console.log("requested", data)


            setPosts(data);
        };
        fetchPosts();
    }, []);

    console.log(posts)


    return (
        <div className="flex flex-col justify-center">
            { posts ? posts.map(obj => <Item todo={obj.todo} desc={obj.description} />) : <div> nothing here </div> }
            <form className="flex flex-row justify-center bg-gray-200 m-5 p-5 rounded">
                <button className="border-2 border-gray-300 p-2 rounded">add + </button>
            </form>
        </div>
    )
}

export default Collection