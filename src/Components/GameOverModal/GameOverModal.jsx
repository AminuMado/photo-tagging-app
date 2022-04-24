import { Link } from "react-router-dom";
const GameOverModal = ({ time, playerName, setPlayerName, handleSubmit }) => {
  return (
    <div className=" fixed h-screen w-screen bg-black opacity-95 pointer-events-all z-20">
      <div className="fixed bg-neutral-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-Inconsolata p-5 rounded-lg">
        <div className="p-4 border-b-2 flex justify-center font-bold">
          <h3 className="text-3xl ">You finished in {time} seconds!</h3>
        </div>

        <div className="p-4 border-b-2 flex flex-col text-2xl">
          <p className="mb-3">Submit your score on the global leaderboard!</p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            maxLength="30"
            className="p-2 mt-1 bg-neutral-900 border border-gray-400 focus:border-green-300 outline-none rounded"
            value={playerName}
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <Link to="/">
            <button className=" bg-red-600  p-2 m-3 rounded-lg  hover:scale-105 active:scale-100  text-2xl">
              Cancel
            </button>
          </Link>
          <Link to="/Leaderboard">
            <button
              disabled={playerName.trim() === "" ? true : false}
              className={`bg-green-600  p-2 m-3 rounded-lg  hover:scale-105 active:scale-100  text-2xl ${
                playerName.trim() === ""
                  ? "opacity-30 hover:scale-100"
                  : "opacity-100"
              }`}
              onClick={handleSubmit}
            >
              Submit Score
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
