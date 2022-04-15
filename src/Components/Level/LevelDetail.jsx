import data from "../../data";

const LevelDetail = () => {
  return (
    <div className="flex  text-white m-4">
      <div className="w-1/2 h-[600px] overflow-clip">
        <img src={data.level[2].image} alt={data.level[2].name}></img>
      </div>
      <div className="w-1/2">
        <div>
          <h1>Select Difficulty</h1>
          <div className="flex gap-10 text-xl ">
            <button className="w-24 bg-orange-500 p-3 m-3 rounded-lg hover:scale-105  hover:text-lime-500 hover:font-bold  active:scale-100">
              Easy
            </button>
            <button className="w-24 bg-purple-600 p-3 m-3 rounded-lg hover:text-blue-400 hover:font-bold hover:scale-105 active:scale-100">
              Hard
            </button>
          </div>
        </div>
      </div>
      <button>Start</button>
    </div>
  );
};

export default LevelDetail;
