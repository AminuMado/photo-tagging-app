import Nav from "../Nav/Nav";
import React from "react";

const Leaderboard = () => {
  const [active, setActive] = React.useState("Cyberpunk City");
  const levelList = [
    { name: "Cyberpunk City", color: "zinc" },
    { name: "Universe 113", color: "zinc" },
    { name: "Ultimate Space Battle", color: "emerald" },
  ];
  const levelItem = levelList.map((level) => (
    <button
      key={level.name}
      className={`p-3 m-2 w-60 bg-${level.color}-300 rounded-3xl cursor-pointer hover:font-bold hover:scale-105 active:scale-100`}
    >
      {level.name}
    </button>
  ));
  return (
    <>
      <Nav active="Leaderboard" />
      <div>
        <div className="flex gap-10 justify-center items-center p-3 m-3 duration-200">
          {levelItem}
        </div>

        <div>
          <button>{active}</button>
        </div>
        <div>
          Level:
          <div>
            <button className=" bg-orange-500 w-24 p-3 m-3 rounded-3xl hover:text-lime-500 hover:font-bold hover:scale-105 active:scale-100 focus:border-2 border-dashed">
              Easy
            </button>
            <button className=" bg-purple-600 w-24 p-3 m-3 rounded-3xl hover:text-blue-400 hover:font-bold hover:scale-105 active:scale-100 focus:border-2 border-dashed">
              Hard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
