import React, { useState } from "react";
import Nav from "../Nav/Nav";
import LevelCard from "../Level/LevelCard";
import data from "../../data";
import Overlay from "../Overlay/Overlay";
import LevelDetail from "../Level/LevelDetail";

const Home = ({ setGame }) => {
  const [active, setActive] = useState(false);
  const [currentLevel, setCurrentLevel] = useState({});
  const [difficulty, setDifficulty] = useState(false);
  const [characters, setCharacters] = useState(false);
  // Functions
  const toggleOverlay = () => {
    setActive((prevActive) => !prevActive);
  };
  const clearAll = () => {
    setCurrentLevel({});
    setDifficulty(false);
    setCharacters(false);
  };
  const handleClick = (level) => {
    setCurrentLevel(level);
    toggleOverlay();
  };
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5).slice(2);
  };

  const easyMode = () => {
    setDifficulty(currentLevel.mode[0].difficulty);
    setCharacters(shuffle(currentLevel.mode[0].characters));
  };
  const hardMode = () => {
    setDifficulty(currentLevel.mode[1].difficulty);
    setCharacters(shuffle(currentLevel.mode[1].characters));
  };

  return (
    <>
      <Overlay active={active} />
      <Nav active="Home" />
      <main>
        {active && (
          <button
            className="text-neutral-400 hover:scale-110 duration-300 fixed hover:text-green-600 z-40 right-5 top-5 font-bold text-3xl"
            onClick={() => {
              clearAll();
              toggleOverlay();
            }}
          >
            Back
          </button>
        )}
        <header className="font-bold text-5xl text-center m-6 p-3 text-yellow-300">
          <h1>Choose a Level</h1>
        </header>
        <section className="flex justify-evenly flex-wrap">
          {data.level.map((level) => (
            <LevelCard
              name={level.name}
              image={level.image}
              key={level.name}
              level={level}
              clicked={() => {
                handleClick(level);
              }}
            />
          ))}
        </section>
        <LevelDetail
          active={active}
          level={currentLevel}
          difficulty={difficulty}
          characters={characters}
          easyMode={easyMode}
          hardMode={hardMode}
          startGame={setGame}
        />
      </main>
    </>
  );
};

export default Home;
