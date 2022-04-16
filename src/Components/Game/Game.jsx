import { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";
import Home_Src from "../../Assets/Misc/home.png";
import CharacterCard from "../Character/CharacterCard";
const Game = ({ currentGame }) => {
  const [active, setActive] = useState(false);
  const count = currentGame.characters.filter(
    (character) => !character.isFound
  ).length;
  console.log(count);
  const characters = currentGame.characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        title={character.title}
        key={character.name}
      />
    );
  });
  return (
    <div className="flex h-screen w-screen  text-white">
      <div
        className={
          active
            ? "w-96 max-w-[384px] h-full  bg-neutral-900 fixed transition-all duration-500 left-7 scale-95 rounded-md flex flex-col justify-between p-2"
            : "w-32 max-w-[384px] h-full -left-full absolute transition-all duration-500"
        }
      >
        <div className="flex justify-between items-center w-full">
          <button
            className=" bg-green-600 w-24 p-2 m-3 rounded-lg hover:font-bold hover:scale-105 active:scale-100"
            onClick={() => setActive(!active)}
          >
            Resume
          </button>
          <Link to="/">
            <img
              src={Home_Src}
              alt="Home"
              className="w-10 invert-[.25] hover:invert cursor-pointer hover:scale-105 duration-200 m-2"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          {characters}
        </div>
        <div className="text-3xl font-Inconsolata text-center ">
          <Timer isGameOver={false} />
        </div>
      </div>
      <main
        className={
          active
            ? "scale-x-95 scale-y-95 ml-96 opacity-20 pointer-events-none rounded-md h-full w-full grid place-items-center transition-all duration-300 bg-slate-400"
            : "h-full w-full grid place-items-center transition-all duration-300"
        }
      >
        <img
          src={currentGame.levelImage}
          alt={currentGame.levelName}
          className="max-w-screen-lg min-w-full object-cover"
        />
        <div>
          <p
            onClick={() => setActive(!active)}
            className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center text-4xl font-bold font-Inconsolata fixed left-5 top-3 hover:bg-red-600 cursor-pointer hover:scale-105"
          >
            {count}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Game;
