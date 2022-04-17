const Crosshair = ({ coordinates }) => {
  return (
    <div
      className="rounded-full absolute bg-white opacity-60  border-black border-4 border-dashed w-20 h-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={coordinates}
    >
      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
    </div>
  );
};
export default Crosshair;
