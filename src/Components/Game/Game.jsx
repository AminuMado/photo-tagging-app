import { useState } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";
import Home_Src from "../../Assets/Misc/home.png";
import CharacterCard from "../Character/CharacterCard";
import CharacterDropdown from "../CharacterDropdown/CharacterDropdown";
import Crosshair from "../Crosshair/Crosshair";
const Game = ({ currentGame }) => {
  const [active, setActive] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [clickLocation, setClickLocation] = useState({ left: "0", top: "0" });
  const count = currentGame.characters.filter(
    (character) => !character.isFound
  ).length;
  const dropDown = currentGame.characters
    .filter((character) => !character.isFound)
    .map((character) => (
      <CharacterDropdown key={character.name} character={character} />
    ));
  const getCoordinates = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord };
    return coords;
  };
  const getLocationImageClick = (e) => {
    const xCoordinate = Math.round(e.nativeEvent.offsetX);
    const yCoordinate = Math.round(e.nativeEvent.offsetY);
    const coordinates = { xCoordinate, yCoordinate };
    return coordinates;
  };
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
  };
  const characters = currentGame.characters.map((character) => {
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
    <div className="flex h-screen w-screen  text-white">
      <div
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
          {characters}
        </div>
        <div className="text-3xl font-Inconsolata text-center ">
          <Timer isGameOver={false} />
        </div>
      </div>
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
            const scaledCoords = getCoordinates(e);
          }}
        />
        <div>
          <p
            onClick={() => setActive(!active)}
            className="w-14 h-14 rounded-full bg-red-800 flex items-center justify-center text-4xl font-bold font-Inconsolata fixed left-5 top-3 hover:bg-red-600 cursor-pointer hover:scale-105 z-10"
          >
            {count}
          </p>
        </div>
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
      </main>
    </div>
  );
};

export default Game;
