import "./Util/firebase";
import React, { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Leaderboard from "./Components/LeaderBoard/LeaderBoard";
function App() {
  const [currentGame, setCurrentGame] = useState({
    levelName: "Cyberpunk City",
    difficulty: "easy",
  });
  return (
    <HashRouter basename="/">
      <div className="font-Crosshatcher">
        <Routes>
          <Route path="/" element={<Home setGame={setCurrentGame} />} />
          <Route path="/Game" element={<Game currentGame={currentGame} />} />
          <Route
            path="/Leaderboard"
            element={<Leaderboard currentGame={currentGame} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
