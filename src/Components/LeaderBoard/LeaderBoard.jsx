import Nav from "../Nav/Nav";
import React, { useEffect, useState } from "react";
import { db } from "../../Util/firebase";
import { collection, getDocs } from "firebase/firestore";
import compare from "../../Util/compare";
import getCurrentLevelLeaderboardData from "../../Util/getCurrentLevel";

const Leaderboard = ({ currentGame }) => {
  const [currentLevel, setCurrentLevel] = useState(currentGame.levelName);
  const [difficulty, setDifficulty] = useState(currentGame.difficulty);
  const [leaderboard, setLeaderboard] = useState([]);

  const levelList = [
    { name: "Cyberpunk City", color: "bg-zinc-300" },
    { name: "Universe 113", color: "bg-sky-400" },
    { name: "Ultimate Space Battle", color: "bg-emerald-400" },
  ];
  const levelItem = levelList.map((level) => (
    <button
      key={level.name}
      className={`p-2 m-1 lg:w-72 w-24 h-20 text-xs lg:text-xl ${level.color} rounded-3xl cursor-pointer hover:font-bold hover:scale-105 active:scale-100`}
      onClick={() => setCurrentLevel(level)}
    >
      {level.name}
    </button>
  ));
  const leaderboardList = leaderboard.map((item, index) => {
    return (
      <tr className="text-center text-sm md:text-2xl" key={index}>
        <td>{index + 1}</td>
        <td className="max-w-[300px]">{item.name}</td>
        <td>{item.time}</td>
        <td className="hidden lg:block">{item.date}</td>
      </tr>
    );
  });
  useEffect(() => {
    switch (currentLevel) {
      case "Cyberpunk City":
        setCurrentLevel(levelList[0]);
        break;
      case "Universe 113":
        setCurrentLevel(levelList[1]);
        break;
      case "Ultimate Space Battle":
        setCurrentLevel(levelList[2]);
        break;
      default:
        setCurrentLevel(levelList[0]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //collection ref
    const colRef = collection(db, "highscore");

    const getLeaderboardData = async () => {
      let leaderboardData;
      const firestoreData = await getDocs(colRef);
      firestoreData.forEach((doc) => {
        leaderboardData = doc.data();
      });
      const currentLevelLeaderboard = getCurrentLevelLeaderboardData(
        leaderboardData,
        currentLevel.name,
        difficulty
      );

      currentLevelLeaderboard.sort(compare);
      setLeaderboard(currentLevelLeaderboard);
    };
    getLeaderboardData();
  }, [currentLevel, difficulty]);

  return (
    <>
      <Nav active="Leaderboard" />
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-3 lg:gap-10 justify-center items-center p-3 m-2 duration-200">
          {levelItem}
        </div>

        <div className="flex justify-around items-center">
          <button
            className={`p-5 m-2 w-64 ${currentLevel.color} rounded-3xl  font-bold cursor-default`}
          >
            {currentLevel.name}
          </button>
        </div>
        <div className="fixed bottom-0 right-5">
          <button
            onClick={() => setDifficulty("easy")}
            className={`${
              difficulty === "easy"
                ? `opacity-100 cursor-default`
                : `opacity-20 active:scale-100 hover:opacity-75`
            } bg-orange-500 w-24 text-xs md:text-base p-2 md:p-3 m-3 rounded-3xl font-bold hover:scale-105 `}
          >
            Easy
          </button>
          <button
            onClick={() => setDifficulty("hard")}
            className={`${
              difficulty === "hard"
                ? `opacity-100 cursor-default`
                : `opacity-20 active:scale-100 hover:opacity-60`
            } bg-purple-600 w-24  text-xs md:text-base p-2 md:p-3 m-3 rounded-3xl font-bold hover:scale-105  `}
          >
            Hard
          </button>
        </div>
      </div>
      <div className="flex justify-center p-5 ">
        <table className=" w-full text-white text-base md:text-3xl">
          <thead
            className={
              difficulty === "easy" ? "bg-orange-500" : "bg-purple-600"
            }
          >
            <tr>
              <th className="w-1 text-center p-5">Place</th>
              <th className="w-1/3 text-center p-5">Name</th>
              <th className="w-1/3 text-center  p-5">Time</th>
              <th className="w-1/3 text-center p-5 hidden lg:table-cell">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="text-2xl font-bold ">{leaderboardList}</tbody>
        </table>
      </div>
    </>
  );
};

export default Leaderboard;
