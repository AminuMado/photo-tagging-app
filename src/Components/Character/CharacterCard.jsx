const CharacterCard = ({ name, title, image }) => {
  return (
    <div className="text-white duration-300 flex flex-col items-center justify-center w-52 m-4 p-4">
      <div className="w-56 h-60 flex justify-center overflow-clip">
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center font-Inconsolata text-lg ">
        <h1>{name}</h1>
        <h2 className="text-xl italic">{title}</h2>
      </div>
    </div>
  );
};
export default CharacterCard;
