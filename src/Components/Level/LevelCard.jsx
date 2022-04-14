import React from "react";

const LevelCard = (props) => {
  return (
    <div
      className=" font-bold flex flex-col w-[600px] h-96 min-w-[250px] items-center justify-center m-3 overflow-clip border-2 rounded-md 
      border-gray-400 relative hover:scale-105 duration-300"
      onClick={props.clicked}
    >
      <img src={props.image} alt={props.name} />
      <h1 className="absolute z-10 top-0 text-yellow-400 text-2xl p-3 bg-black w-full text-center">
        {props.name}
      </h1>
    </div>
  );
};

export default LevelCard;
