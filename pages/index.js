// our homepage, to fetch posts and display this data

import { useEffect, useState } from 'react'; 
import Header from './components/header'
import Nav from './components/nav';
import Item from './components/item';

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
        <Nav />
        <Header />
        <h1 className='text-red-600 text-xl p-5'>This is the homepage</h1>
        <p className='px-5'>
            This app was made to demonstrate C.R.U.D. (Create, Read, Update, and Delete) using a todo list!
            feel free to add items to your list so that you can help keep track of your daily todos. The data
            entered and saved here is only visibile in your browser.
        </p>

        <div>
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
        {/* {posts.map((post) => {
            <div key={post.id}>
                <h2>test</h2>
                <p>{post.content}</p>
            </div>
        })} */}
    </div>
);

}