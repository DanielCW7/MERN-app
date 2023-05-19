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
        <div>
            { posts ? posts.map(e => <Item todo={e.todo}/>) : <div> nothing here </div> }
        </div>
    )
}

export default Collection