import data from "../../data";
import CharacterCard from "../Character/CharacterCard";

const LevelDetail = () => {
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5).slice(2);
  }
  const FCharacters = data.level[0].mode[0].characters;
  const Characters = shuffle(FCharacters);

  const displayCharacters = Characters.map((character) => {
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
    <div className="flex flex-col items-center justify-center">
      <div className="flex  text-white m-4">
        <div className="w-1/2 h-[600px] overflow-clip">
          <img src={data.level[2].image} alt={data.level[2].name}></img>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl">Select Difficulty</h1>
            <div className="flex gap-10 text-xl ">
              <button className=" bg-orange-500 w-24 p-3 m-3 rounded-lg hover:text-lime-500 hover:font-bold hover:scale-105 active:scale-100 ">
                Easy
              </button>
              <button className=" bg-purple-600 w-24 p-3 m-3 rounded-lg hover:text-blue-400 hover:font-bold hover:scale-105 active:scale-100">
                Hard
              </button>
            </div>
            <div className="flex items-center">{displayCharacters}</div>
          </div>
        </div>
      </div>
      <button className="bg-yellow-400 text-5xl w-60 p-5 m-3 rounded-lg hover:font-bold hover:scale-105 active:scale-100">
        Start
      </button>
    </div>
  );
};

export default LevelDetail;
