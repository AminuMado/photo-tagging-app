import Nav from "../Nav/Nav";
import React from "react";

const Leaderboard = () => {
  const [active, setActive] = React.useState({
    name: "Cyberpunk City",
    color: "bg-zinc-300",
  });
  const [difficulty, setDifficulty] = React.useState("easy");
  const levelList = [
    { name: "Cyberpunk City", color: "bg-zinc-300" },
    { name: "Universe 113", color: "bg-sky-400" },
    { name: "Ultimate Space Battle", color: "bg-emerald-400" },
  ];
  const levelItem = levelList.map((level) => (
    <button
      key={level.name}
      className={`p-3 m-2 w-60 ${level.color} rounded-3xl cursor-pointer hover:font-bold hover:scale-105 active:scale-100`}
      onClick={() => setActive(level)}
    >
      {level.name}
    </button>
  ));
  return (
    <>
      <Nav active="Leaderboard" />
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-10 justify-center items-center p-3 m-3 duration-200">
          {levelItem}
        </div>

        <div className="flex justify-around items-center">
          <button
            className={`p-5 m-2 w-64 ${active.color} rounded-3xl  font-bold cursor-default`}
          >
            {active.name}
          </button>
        </div>
        <div className="fixed bottom-0 right-5">
          <button
            onClick={() => setDifficulty("easy")}
            className={`${
              difficulty === "easy"
                ? `opacity-100 cursor-default`
                : `opacity-20 active:scale-100 hover:opacity-75`
            } bg-orange-500 w-24 p-3 m-3 rounded-3xl font-bold hover:scale-105 `}
          >
            Easy
          </button>
          <button
            onClick={() => setDifficulty("hard")}
            className={`${
              difficulty === "hard"
                ? `opacity-100 cursor-default`
                : `opacity-20 active:scale-100 hover:opacity-60`
            } bg-purple-600 w-24 p-3 m-3 rounded-3xl font-bold hover:scale-105  `}
          >
            Hard
          </button>
        </div>
      </div>
      <table>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Time(seconds)</th>
          <th>Date</th>
        </tr>
      </table>
    </>
  );
};

export default Leaderboard;

// // Example of a data array that
// // you might receive from an API
// const data = [
//   { name: "Anom", age: 19, gender: "Male" },
//   { name: "Megha", age: 19, gender: "Female" },
//   { name: "Subham", age: 25, gender: "Male"},
// ]

// function App() {
//   return (
//     <div className="App">
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>
//         {data.map((val, key) => {
//           return (
//             <tr key={key}>
//               <td>{val.name}</td>
//               <td>{val.age}</td>
//               <td>{val.gender}</td>
//             </tr>
//           )
//         })}
//       </table>
//     </div>
//   );
// }
