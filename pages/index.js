// our homepage, to fetch posts and display this data
import Nav from './components/nav';
import Form from './components/form';
export default function Home() {


return (
    <div className='bg-gray-500'>
        <Nav />
        <div className='max-w-3xl mx-auto py-12'>
            <h1 className='font-bold text-xl p-5'>Home</h1>
            <p className='px-5'>
                This app was made to demonstrate C.R.U.D. (Create, Read, Update, and Delete) to interact with a database!
            </p>              
        </div>
      
        <Form />
    </div>
);

}