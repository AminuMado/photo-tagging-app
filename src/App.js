import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Leaderboard from "./Components/LeaderBoard/LeaderBoard";
function App() {
  const [currentGame, setCurrentGame] = useState({
    levelName: "Cyberpunk City",
    difficulty: "easy",
  });
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

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbl-rwQRQktbr8eQqH7LnsgQL05zzQoF0",
  authDomain: "find-em-all.firebaseapp.com",
  projectId: "find-em-all",
  storageBucket: "find-em-all.appspot.com",
  messagingSenderId: "381554495292",
  appId: "1:381554495292:web:689944b96f65a5dafb9839",
  measurementId: "G-23B1QTNEX7",
};
