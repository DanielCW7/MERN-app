

const Item = () => {
    return (
        <div className="p-2 bg-gray-300 m-5">
            <h3>Take out garbage</h3>
            <p> this is a description of how to take out garbage </p>
            {/* form? -> button, checkbox, radios, form field edit */}
            <form>
                <button className="bg-white border-2 border-red-600 rounded py-1 px-2 m-1"> edit title </button>
                <button className="bg-white border-2 border-red-600 rounded py-1 px-2 m-2"> edit description </button>
                <button className="bg-white border-2 border-red-600 rounded py-1 px-2 m-2"> remove task </button>
            </form>
        </div>
    )
}

export default Item