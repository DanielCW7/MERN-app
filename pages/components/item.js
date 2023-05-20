import { useState } from "react";

const Item = (param) => {
    
    const [toggle, setToggle] = useState(false)

    const edit = () => {
        setToggle(prevToggle => !prevToggle)
    };

    return (
        <div className="p-2 bg-gray-300 m-5 rounded">
            { toggle ? 
            <div className="flex flex-col my-2 gap-2">
                <input className="p-2" type="textbox" placeholder={param.todo}/> 
                <input className="p-2" type="textbox" placeholder={param.desc}/>
            </div> 
            :
            <div className="flex flex-col my-2 gap-2">
                <h3 className="p-2"> {param.todo} </h3>
                <p className="p-2"> {param.desc} </p>
            </div>}
            <button className="bg-white rounded py-1 px-2 m-1" onClick={edit}> edit </button>
            {toggle ? 
            // button triggers the UPDATE request
            <button className="bg-white rounded py-1 px-2 m-1"> confirm? </button> 
            : 
            <span></span>}
            {/* button triggers the DELETE request */}
            <button className="bg-white rounded py-1 px-2 m-1"> Finished! </button>
        </div>
    )
}

export default Item