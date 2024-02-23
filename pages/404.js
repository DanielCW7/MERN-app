// 404 not found page

import Link from "next/link"


const notFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center text-center">
            <h1 className="text-4xl font-bold"> 404 </h1>
            <p> This page does not exist. </p>
            <br/>
            <Link href="/" className="underline"> Home </Link>
        </div>
    )
}

export default notFound