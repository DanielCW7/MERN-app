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
    console.log("posts received: ", posts)

    useEffect(() => {    
        const form = document.querySelector("#add");
        form.addEventListener("submit", event => {
            event.preventDefault();

            addItem(event)
        })
    
        const addItem = async (event) => {
    
            const e = event.target;
            const todo = e.elements[0].value;
            const description = e.elements[1].value;
            console.log(todo, description)
            // this request fails
            const res = await fetch('/api/posts', {
                method: "POST",
                body: JSON.stringify({ todo, description}),
                headers: {
                    'Content-Type' : 'applications/json'
                }
            });
            // 500 error
            console.log(res)
            if(res.ok) {
                const data = await res.json();
                console.log("requested", data);
                setPosts(prevPosts => [...prevPosts, data] );
                console.log(prevPosts, data)
            } else {
                console.log("failed to create new post")
            }
        };
    }, []);




    return (
        <div className="flex flex-col justify-center">
            { 
                posts ? posts.map(obj => <Item todo={obj.todo} desc={obj.description} key={obj._id} />) 
                : 
                <div> nothing here </div> 
            }
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