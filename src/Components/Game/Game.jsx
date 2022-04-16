import { useState } from "react";

const Game = (props) => {
  console.log(props.currentGame);
  const [active, setActive] = useState(false);
  return (
    <div className="flex h-screen w-screen  text-white">
      <div
        className={
          active
            ? "w-96 h-full bg-red-600 absolute transition-all duration-300 left-7 scale-95 rounded-md flex items-center p-4 "
            : "w-32 h-full -left-1/4 bg-red-600 absolute transition-all duration-300"
        }
      >
        <div>sidebar</div>
      </div>
      <main
        className={
          active
            ? "scale-x-95 scale-y-95 ml-96 opacity-40 rounded-md h-full w-full grid place-items-center transition-all duration-300 bg-slate-400"
            : "h-full w-full grid place-items-center transition-all duration-300"
        }
      >
        <div>
          Main Content
          <button onClick={() => setActive((prev) => !prev)}>Click Me</button>
        </div>
      </main>
    </div>
  );
};

export default Game;
