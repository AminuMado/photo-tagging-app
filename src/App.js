import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Leaderboard from "./Components/LeaderBoard/LeaderBoard";
// import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className=" font-Crosshatcher">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
