import Header from './components/header'

const Bio = () => {
    return (
        <div>
            <Header />
            <h1 className='text-red-600 text-xl'>Bio page</h1>
            <p> this page is the bio page </p>
            <a href="/">Home</a><br/>
            <a href="/about/">About</a>
        </div>
    )
}

export default Bio