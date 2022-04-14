import React, { useState } from "react";
import Nav from "../Nav/Nav";
import LevelCard from "../Level/LevelCard";
import data from "../../data";
import Overlay from "../Overlay/Overlay";
const Home = () => {
  const [active, setActive] = useState(false);
  const toggleOverlay = () => {
    setActive((prevActive) => !prevActive);
  };
  const levels = data.level.map((level) => (
    <LevelCard
      name={level.name}
      image={level.image}
      key={level.name}
      clicked={toggleOverlay}
    />
  ));
  return (
    <>
      <Overlay active={active} />
      <Nav active="Home" />
      <main>
        {active && (
          <button
            className="text-neutral-400 hover:scale-110 duration-300 absolute z-30 right-5 top-5 font-bold text-3xl "
            onClick={toggleOverlay}
          >
            <- Back
          </button>
        )}
        <header className="font-bold text-5xl text-center m-6 p-3 ">
          <h1>Choose a Level</h1>
        </header>
        <section className="flex justify-evenly flex-wrap">{levels}</section>
      </main>
    </>
  );

  /* My home component shoul have a these components
NavBar Component
Level Selecton Card component
An overlay Component
Level Options Section component
Characters Card Component
buttons Component


*/
};

export default Home;
