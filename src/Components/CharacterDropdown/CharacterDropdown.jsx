import isCoordinateWithinOneDegree from "../../Util/isCoordinateWithinOneDegree";
const CharacterDropdown = ({
  character,
  setCharacters,
  coordinates,
  setShowDropdown,
}) => {
  const handleClick = (e) => {
    const isCharacterAtCoords =
      isCoordinateWithinOneDegree(character.xCoordinate, coordinates.x) &&
      isCoordinateWithinOneDegree(coordinates.y, character.yCoordinate);
    setShowDropdown((prev) => !prev);
    if (!isCharacterAtCoords) return;
    setCharacters((prevChars) => {
      return prevChars.map((char) =>
        character.name === char.name ? { ...char, isFound: true } : char
      );
    });
  };
  return (
    <div onClick={handleClick}>
      <div className="flex w-40 rounded-md  hover:bg-neutral-700 cursor-pointer active:scale-95 items-center justify-around font-Inconsolata text-white">
        <img
          className="w-8 h-11 object-contain"
          src={character.image}
          alt={character.name}
        ></img>
        <p className="text-center w-1/2">{character.name}</p>
      </div>
    </div>
  );
};

export default CharacterDropdown;
