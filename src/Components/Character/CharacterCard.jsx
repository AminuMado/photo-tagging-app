const CharacterCard = ({ name, title, image, size }) => {
  return (
    <div
      className={
        size === "lg"
          ? "text-white flex flex-col items-center justify-center w-52 m-4 p-4"
          : "text-white flex justify-around w-full"
      }
    >
      <div
        className={
          size === "lg"
            ? "w-56 h-60 flex justify-center overflow-clip"
            : "w-40 max-w-[160px] min-w-[160px] m-2"
        }
      >
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col items-center justify-center font-Inconsolata text-lg text-center">
        <h1>{name}</h1>
        <h2 className="text-xl italic">{title}</h2>
      </div>
    </div>
  );
};
export default CharacterCard;
