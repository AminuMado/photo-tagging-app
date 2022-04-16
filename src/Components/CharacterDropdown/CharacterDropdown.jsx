const CharacterDropdown = ({ character }) => {
  return (
    <div>
      <div className="flex w-52 bg-neutral-900 rounded-sm hover:bg-neutral-700 items-center justify-around font-Inconsolata text-white">
        <img
          className="w-9 h-11 object-contain"
          src={character.image}
          alt={character.name}
        ></img>
        <p className="text-center w-1/3">{character.name}</p>
      </div>
    </div>
  );
};

export default CharacterDropdown;
