

const Item = (param) => {
    return (
        <div className="p-2 bg-gray-300 m-5 rounded">
            <h3> {param.todo ?? "error"} </h3>
            <p> {param.desc} </p>
            {/* form? -> button, checkbox, radios, form field edit */}
            <form>
                <button className="bg-white rounded py-1 px-2 m-1"> edit </button>
                <button className="bg-white rounded py-1 px-2 m-2"> complete </button>
            </form>
        </div>
    )
}

export default Item