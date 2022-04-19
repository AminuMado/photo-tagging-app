import Nav from "../Nav/Nav";
const Leaderboard = () => {
  return (
    <>
      <Nav active="Leaderboard" />
      <div>
        <div className="flex gap-10  p-3 m-3 duration-200">
          <button className="p-3 m-2 w-60 bg-zinc-300 rounded-3xl cursor-pointer hover:font-bold hover:scale-105 active:scale-100 duration-300">
            Cyberpunk City
          </button>
          <button className="p-3 m-2 w-60 bg-sky-400 rounded-3xl cursor-pointer hover:font-bold hover:scale-105 active:scale-100 duration-300">
            Universe 113
          </button>
          <button className="p-3 m-2 w-60 bg-emerald-300 rounded-3xl cursor-pointer hover:font-bold hover:scale-105 active:scale-100 duration-300">
            Ultimate Space Battle
          </button>
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
