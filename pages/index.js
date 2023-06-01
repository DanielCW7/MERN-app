// our homepage, to fetch posts and display this data
import Nav from './components/nav';
import Collection from './components/collection';
export default function Home() {


return (
    <div>
        <Nav />
        <h1 className='font-bold text-xl p-5'>This is the homepage</h1>
        <p className='px-5'>
            This app was made to demonstrate C.R.U.D. (Create, Read, Update, and Delete) using a todo list!
            feel free to add items to your list so that you can help keep track of your daily todos. The data
            entered and saved here is only visibile in your browser.
        </p>        
        <Collection />
    </div>
);

}