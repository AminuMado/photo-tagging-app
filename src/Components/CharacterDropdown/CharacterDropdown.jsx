const CharacterDropdown = ({ character }) => {
  return (
    <div>
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
