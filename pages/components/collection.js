import Item from "./item";
import db from "../../lib/db";
import { set } from "mongoose";
import { useEffect, useState } from 'react'; 

const Collection = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('../api/posts');
            const data = await res.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    console.log(posts)


    return (
        <div>
            {/* { posts ? {posts.map(element => <Item/>)} : <div> nothing here </div>} */}
        </div>
    )
}

export default Collection