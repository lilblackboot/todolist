import React from "react";
import { useState } from "react";

const Task = ({text,onDelete}) => {

  const [tick,setTick] = useState(false)

  const handleClick = () => {
    console.log("clicked!" + tick)
    setTick(!tick)

  }
  return (
    <div>
      <div className="bg-white my-2 mx-2 p-1 rounded-md flex justify-between">
        <div className="flex">
          <input
            onClick={handleClick}
            type="checkbox"
            name="check"
            id="check"
            className="mx-3 ml-1"
          />
          <p style={{textDecoration: tick? 'line-through' :"none" }}>{text}</p>
        </div>

        <div>
          <button className="bg-gray-300 px-2 py-1 mx-1 rounded-md hover:bg-purple-500 ">
            <img
              className="w-3 "
              src="https://www.pngfind.com/pngs/m/275-2755033_edit-png-file-on-phone-svg-edit-icon.png"
            ></img>
          </button>
          <button onClick={onDelete} className="bg-gray-300 px-2 mx-1 py-1 rounded-md hover:bg-red-500 ">
            <img
              className="w-3"
              src="https://static.thenounproject.com/png/629749-200.png"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
