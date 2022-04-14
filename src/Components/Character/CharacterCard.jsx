const CharacterCard = (props) => {
  return (
    <div className="text-white hover:scale-110 duration-300 flex flex-col items-center justify-center w-52 m-4 p-4">
      <div className="w-56 h-60 flex justify-center overflow-clip cursor-pointer">
        <img className="" src={props.image} alt={props.name} />
      </div>
      <div className="flex flex-col items-center justify-center font-Inconsolata text-lg ">
        <h1>{props.name}</h1>
        <h2 className="text-xl italic">{props.title}</h2>
      </div>
    </div>
  );
};
export default CharacterCard;
