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
          <div>
            <button>Easy</button>
            <button>Hard</button>
          </div>
        </div>
      </div>
      <button>Start</button>
    </div>
  );
};

export default LevelDetail;
