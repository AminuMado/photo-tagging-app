import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";
import Home_Src from "../../Assets/Misc/home.png";
import CharacterCard from "../Character/CharacterCard";
import CharacterDropdown from "../CharacterDropdown/CharacterDropdown";
import Crosshair from "../Crosshair/Crosshair";
import GameOverModal from "../GameOverModal/GameOverModal";
import { getCoordinates, getLocationImageClick } from "../../Util/Coordinates";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Util/firebase";
import formatTime from "../../Util/formatTime";
const Game = ({ currentGame }) => {
  const [characters, setCharacters] = useState(currentGame.characters);
  const [difficulty] = useState(currentGame.difficulty);
  const [active, setActive] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: "0", top: "0" });
  const [showMessage, setShowMessage] = useState(false);
  const [isGameOver, setIsGameOver] = useState(currentGame.isGameOver);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [playerName, setPlayerName] = useState("");
  //Map Constants
  const count = characters.filter((character) => !character.isFound).length;
  const dropDown = characters
    .filter((character) => !character.isFound)
    .map((character) => (
      <CharacterDropdown
        key={character.name}
        character={character}
        setCharacters={setCharacters}
        coordinates={coordinates}
        setShowDropdown={setShowDropDown}
        setShowMessage={setShowMessage}
      />
    ));
  const charactersList = characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        title={character.title}
        key={character.name}
        isFound={character.isFound}
      />
    );
  });

  //UseEffect for GameOver
  useEffect(() => {
    if (count === 0) {
      setIsGameOver(true);
    }
    if (!isGameOver) return;
    let endingTimestamp = Date.now();
    let score = formatTime((endingTimestamp - startTime) / 1000);
    setScore(score);
  }, [isGameOver, count, startTime]);

  //function for pushing player data to server
  const handleSubmit = () => {
    if (playerName.trim() === "") {
      alert("Enter your Name");
      return;
    } else {
      let levelName;
      switch (currentGame.levelName) {
        case "Cyberpunk City":
          levelName = "CyberPunkCity";
          break;
        case "Universe 113":
          levelName = "Universe113";
          break;
        case "Ultimate Space Battle":
          levelName = "UltimateSpaceBattle";
          break;
        default:
          throw Error("Something went wrong");
      }

      const playerData = {
        name: playerName,
        time: score,
        date: new Date().toLocaleDateString("en-GB").slice(0, 10),
      };

      const updatefield = `${levelName}.${difficulty}`;
      const docRef = doc(db, "highscore", "PGCVZMDfo5xz5Zh2aD1C");
      updateDoc(docRef, {
        [updatefield]: arrayUnion(playerData),
      });
    }
  };

  //Functions
  const updateClickLocation = (coordinates) => {
    const { xCoordinate, yCoordinate } = coordinates;
    const updatedCoords = {
      left: xCoordinate + "px",
      top: yCoordinate + "px",
    };
    setClickLocation(updatedCoords);
    setShowDropDown(!showDropDown);
  };

  const imageClick = (e) => {
    const currentCoordinates = getLocationImageClick(e);
    setCoordinates(currentCoordinates);
    updateClickLocation(currentCoordinates);
    setCoordinates(getCoordinates(e));
  };

  return (
    <div className="flex h-screen w-screen text-white">
      <aside
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
          {charactersList}
        </div>
        <div className="text-3xl font-Inconsolata text-center ">
          <Timer isGameOver={false} />
        </div>
      </aside>
      <main
        className={
          active
            ? "scale-x-95 scale-y-95 ml-96 opacity-20 pointer-events-none rounded-md h-full w-full grid place-items-center transition-all duration-300 bg-slate-400"
            : "h-fit w-full grid place-items-center transition-all duration-300 relative overflow-clip "
        }
      >
        <img
          src={currentGame.levelImage}
          alt={currentGame.levelName}
          className="max-w-screen-lg min-w-full object-cover"
          onClick={(e) => {
            imageClick(e);
          }}
        />
        <button
          className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center text-4xl font-bold font-Inconsolata fixed left-5 top-3 
          hover:bg-red-600 cursor-pointer hover:scale-105 z-10"
          onClick={() => setActive(!active)}
        >
          {count}
        </button>

        {/* Condtional Renders */}

        {showDropDown && (
          <>
            <Crosshair coordinates={clickLocation} />
            <div
              className="absolute bg-neutral-900 rounded-md"
              style={clickLocation}
            >
              {dropDown}
            </div>
          </>
        )}
        {showMessage && (
          <p className="bg-red-600 rounded-lg p-4 text-xl fixed top-3 font-bold">
            Keep Looking
          </p>
        )}
      </main>
      {isGameOver && (
        <GameOverModal
          time={score}
          setPlayerName={setPlayerName}
          playerName={playerName}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Game;
