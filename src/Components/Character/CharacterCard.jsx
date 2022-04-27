const CharacterCard = ({ name, title, image, size, isFound }) => {
  return (
    <div
      className={
        size === "lg"
          ? "text-white flex flex-col items-center justify-center w-40 md:w-48 m-2 p-2"
          : "text-white flex justify-center w-full m-2"
      }
    >
      <div
        className={
          size === "lg"
            ? "w-36  md:w-52 h-52 md:h-60 flex justify-center items-center overflow-clip "
            : "w-2/3 max-w-[160px] min-w-[160px] flex justify-center items-center"
        }
      >
        <img
          className={
            isFound ? "opacity-30 object-contain h-52" : "object-contain h-52 "
          }
          src={image}
          alt={name}
        />
      </div>
      <div
        className={
          size === "lg"
            ? "flex flex-col items-center justify-center font-Inconsolata text-lg text-center w-3/4 "
            : "flex flex-col items-center justify-center font-Inconsolata text-lg text-center w-1/3"
        }
      >
        <h1>{name}</h1>
        <h2 className="text-xl italic">{title}</h2>
      </div>
    </div>
  );
};
export default CharacterCard;
