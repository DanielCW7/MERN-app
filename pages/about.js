import Header from './components/header';
import Nav from './components/nav';

const About = () => {
    return (
        <div>
            <Nav />
            <Header />
            <h1 className='text-red-600 text-xl'>About</h1>
            <p>this page was routed by creating an <strong>about.js</strong> file in the pages directory
            alongside the <strong>index.js</strong> file </p>
            <a href="/">Home</a><br/>
            <a href="/bio/">Bio</a>
        </div>
    )
}

export default About