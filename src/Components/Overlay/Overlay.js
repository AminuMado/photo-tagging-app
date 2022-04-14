const Overlay = (props) => {
  return (
    <div
      className={`${
        props.active ? "translate-x-0" : "-translate-x-full"
      } fixed h-screen w-screen bg-black opacity-80 pointer-events-all z-20 duration-700`}
    ></div>
  );
};
export default Overlay;
