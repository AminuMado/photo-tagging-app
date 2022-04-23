const getCurrentLevelLeaderboardData = (data, currentLevel, difficulty) => {
  switch (currentLevel) {
    case "Cyberpunk City":
      return data.CyberPunkCity[difficulty];
    case "Universe 113":
      return data.Universe113[difficulty];
    case "Ultimate Space Battle":
      return data.UltimateSpaceBattle[difficulty];
    default:
      return data.CyberPunkCity[difficulty];
  }
};
export default getCurrentLevelLeaderboardData;
