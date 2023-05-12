// our homepage, to fetch posts and display this data

import { useEffect, useState } from 'react'; 

export default function Home() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await fetch('/api/posts');
    //         const data = await res.json();
    //         setPosts(data);
    //     };
    //     fetchPosts();
    // }, []);


return (
    <div>
        <h1 className='text-red-600 text-xl'>This is the homepage</h1>
        <p>some sample text</p>
        <a href="/about/">about</a><br/> {/* this links to the about page, which is also in this directory */}
        <a href="/bio/">Bio</a>

        {/* {posts.map((post) => {
            <div key={post.id}>
                <h2>test</h2>
                <p>{post.content}</p>
            </div>
        })} */}
    </div>
);

}