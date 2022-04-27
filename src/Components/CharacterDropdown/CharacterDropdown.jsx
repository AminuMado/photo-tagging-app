import isCoordinateWithinOneDegree from "../../Util/isCoordinateWithinOneDegree";
const CharacterDropdown = ({
  character,
  setCharacters,
  coordinates,
  setShowDropdown,
  setShowMessage,
}) => {
  const handleClick = (e) => {
    const isCharacterAtCoords =
      isCoordinateWithinOneDegree(character.xCoordinate, coordinates.x) &&
      isCoordinateWithinOneDegree(coordinates.y, character.yCoordinate);
    setTimeout(() => setShowDropdown((prev) => !prev), 700);

    if (!isCharacterAtCoords) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1000);
      return;
    }
    setCharacters((prevChars) => {
      return prevChars.map((char) =>
        character.name === char.name ? { ...char, isFound: true } : char
      );
    });
  };
  return (
    <div onClick={handleClick}>
      <div className="flex w-20 md:w-40 rounded-md  hover:bg-neutral-700 cursor-pointer active:scale-95 items-center justify-around font-Inconsolata text-white">
        <img
          className="w-4  md:w-8 h-5 md:h-11 object-contain"
          src={character.image}
          alt={character.name}
        ></img>
        <p className="text-center text-xs md:text-base w-1/2">
          {character.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterDropdown;
