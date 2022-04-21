import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Leaderboard from "./Components/LeaderBoard/LeaderBoard";
function App() {
  const [currentGame, setCurrentGame] = useState(false);
  return (
    <div className=" font-Crosshatcher">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home setGame={setCurrentGame} />} />
          <Route path="/Game" element={<Game currentGame={currentGame} />} />
          <Route
            path="/Leaderboard"
            element={<Leaderboard currentGame={currentGame} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
