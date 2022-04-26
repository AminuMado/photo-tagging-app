import CharacterCard from "../Character/CharacterCard";
import { Link } from "react-router-dom";
const LevelDetail = ({
  level,
  active,
  easyMode,
  hardMode,
  characters,
  difficulty,
  startGame,
}) => {
  const handleClick = () => {
    const currentGame = {
      levelName: level.name,
      levelImage: level.image,
      difficulty: difficulty,
      characters: characters,
      isGameOver: false,
    };
    startGame(currentGame);
  };
  return (
    <div
      className={`${
        active ? "-translate-y-0" : "translate-y-full"
      } fixed top-20 h-screen w-screen pointer-events-all z-30 overflow-clip duration-1000`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-5 text-white mx-4 mt-4 items-center justify-center">
          <div className="w-1/2 min-w-[600px] h-[600px] overflow-clip hidden xl:block">
            <img src={level.image} alt={level.name}></img>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-3xl md:text-4xl text-center w-96">
                Select Difficulty
              </h1>
              <div className="flex gap-10 text-xl ">
                <button
                  onClick={easyMode}
                  className=" bg-orange-500 w-24 p-3 m-3 rounded-lg hover:text-lime-500 hover:font-bold hover:scale-105 active:scale-100 focus:border-2 border-dashed"
                >
                  Easy
                </button>
                <button
                  onClick={hardMode}
                  className=" bg-purple-600 w-24 p-3 m-3 rounded-lg hover:text-blue-400 hover:font-bold hover:scale-105 active:scale-100 focus:border-2 border-dashed"
                >
                  Hard
                </button>
              </div>
              {characters && (
                <div className="flex items-center w-full scale-75 md:scale-100">
                  {characters.map((character) => {
                    return (
                      <CharacterCard
                        name={character.name}
                        image={character.image}
                        title={character.title}
                        key={character.name}
                        size="lg"
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <Link to="/Game">
          <button
            className={
              characters
                ? "bg-yellow-400 text-4xl md:text-5xl w-60 p-3 rounded-lg hover:font-bold hover:scale-105 active:scale-100 opacity-100 transition-opacity duration-500 md:mt-4 "
                : "opacity-0"
            }
            onClick={handleClick}
          >
            Start
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LevelDetail;
