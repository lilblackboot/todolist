import React, { useState } from "react";

const Addtask = ({onAddtask}) => {

    const [text,setText] = useState("")

    const handleSubmit = (e)=>{
        console.log(e)
        e.preventDefault()
        onAddtask(text)
        setText("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="add a task" className="border-2 m-3 px-3 py-1 w-3/4 rounded-md"/><button type="submit" className=" text-l bg-purple-500 px-3 rounded-xl shadow" >Add</button>
            </form>
        </div> 
    );
};

export default Addtask;
