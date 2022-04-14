import Nav from "../Nav/Nav";
import LevelCard from "../Level/LevelCard";
import data from "../../data";
const Home = () => {
  const levels = data.level.map((level) => (
    <LevelCard name={level.name} image={level.image} />
  ));
  return (
    <>
      <Nav active="Home" />
      <main>
        <header>
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
