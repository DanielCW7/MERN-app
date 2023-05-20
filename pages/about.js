import Nav from './components/nav';

const About = () => {
    return (
        <div>
            <Nav />
            <h1 className='font-bold text-xl'>About</h1>
            <p>this page was routed by creating an <strong>about.js</strong> file in the pages directory
            alongside the <strong>index.js</strong> file </p>
        </div>
    )
}

export default About