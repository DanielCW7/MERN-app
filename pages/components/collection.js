import Item from "./item";
import connectDB from '../../lib/db';
import { set } from "mongoose";
import { useEffect, useState } from 'react'; 

const Collection = () => {

    const [posts, setPosts] = useState([]);

    // by default, initiates a GET request on initial load
    useEffect(() => {    
        const fetchPosts = async () => {
            const res = await fetch('/api/posts');
            const data = await res.json();
            console.log("requested", data)

            setPosts(data);
        };
        fetchPosts();
    }, []);

    // const form = document.querySelector("#add");
    // form.addEventListener("submit", event => {
    //     event.preventDefault();
    //     addItem()
    // })
    // const addItem = async (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const title = form.elements.title.value;
    //     const content = form.elements.content.value;

    //     const res = await fetch('/api/posts', {
    //         method: "POST",
    //         body: JSON.stringify({ title, content}),
    //         header: {
    //             'Content-Type' : 'applications/json'
    //         }
    //     });

    //     if(res.ok) {
    //         const data = await res.json();
    //         console.log("requested", data);
    //         setPosts(prevPosts => [...prevPosts, data] );
    //     } else {
    //         console.log("failed to create new post")
    //     }
    // };

    return (
        <div className="flex flex-col justify-center">
            { posts ? posts.map(obj => <Item todo={obj.todo} desc={obj.description} />) : <div> nothing here </div> }
            <form id="add" className="flex flex-col justify-center bg-gray-200 m-5 rounded">
                <input type="textbox" placeholder="task" className="bg-white py-1 px-2 m-2" required />
                <input type="textbox" placeholder="task description" className="bg-white py-1 px-2 m-2" required />
                {/* button triggers the POST request */}
                <button type="submit" className="p-5 rounded"> add item </button>
            </form>
        </div>
    )
}

export default Collection