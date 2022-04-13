// This houses the whole game data
//Levels
import CyberPunkCity_Src from "./Assets/Levels/CyberpunkCity.jpg";
import Universe113_Src from "./Assets/Levels/universe113.jpg";
import UltimateSpaceBattle_Src from "./Assets/Levels/ultimatespacebattle.jpg";
// Characters
// CyberPunkCity
import Cc_Src from "./Assets/Characters/Cyberpunk/cc.png";
import Diana_Src from "./Assets/Characters/Cyberpunk/diana.png";
import Dio_Src from "./Assets/Characters/Cyberpunk/dio.png";
import Gwyndolin_Src from "./Assets/Characters/Cyberpunk/gwyndolin.png";
import Hellboy_Src from "./Assets/Characters/Cyberpunk/hellboy.png";
import Leeloo_Src from "./Assets/Characters/Cyberpunk/leeloo.png";
import Neo_Src from "./Assets/Characters/Cyberpunk/neo.png";
import Predator_Src from "./Assets/Characters/Cyberpunk/predator.png";
import Ryuk_Src from "./Assets/Characters/Cyberpunk/ryuk.png";
import Spiderman_Src from "./Assets/Characters/Cyberpunk/spiderman.png";
//Universe113
import Bender_Src from "./Assets/Characters/Universe113/bender.png";
import BigBoss_Src from "./Assets/Characters/Universe113/bigboss.png";
import Excalibur_Src from "./Assets/Characters/Universe113/excalibur.png";
import Gandalf_Src from "./Assets/Characters/Universe113/gandalf.png";
import Genos_Src from "./Assets/Characters/Universe113/genos.png";
import Groot_Src from "./Assets/Characters/Universe113/groot.png";
import Guts_Src from "./Assets/Characters/Universe113/guts.png";
import Kratos_Src from "./Assets/Characters/Universe113/kratos.png";
import Sonic_Src from "./Assets/Characters/Universe113/sonic.png";
import Spawn_Src from "./Assets/Characters/Universe113/spawn.png";
const game = {
  level: [
    {
      name: "CyberPunk City",
      image: CyberPunkCity_Src,
      mode: [
        {
          difficulty: "easy",
          characters: [
            {
              name: "Diana",
              title: "Seven Deadly Sins",
              image: Diana_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Gywndolin",
              title: "Dark Souls",
              image: Gwyndolin_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Leelo",
              title: "The Fifth Element",
              image: Leeloo_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Neo",
              title: "The Matrix",
              image: Neo_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Ryuk",
              title: "Death Note",
              image: Ryuk_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
          ],
        },
        {
          difficulty: "hard",
          characters: [
            {
              name: "C.C",
              title: "Code Geass",
              image: Cc_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Dio Brando",
              title: "JoJo's Bizarre Adventure Stardust Crusaders",
              image: Dio_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Hellboy",
              title: "Hellboy",
              image: Hellboy_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Predator",
              title: "The Predator",
              image: Predator_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Spiderman",
              title: "The Amazing Spiderman",
              image: Spiderman_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
          ],
        },
      ],
    },
    {
      name: "Universe 113",
      image: Universe113_Src,
      mode: [
        {
          difficulty: "easy",
          characters: [
            {
              name: "Excalibur",
              title: "Soul Eater",
              image: Excalibur_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Guts",
              title: "Berserk",
              image: Guts_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Kratos",
              title: "God of War",
              image: Kratos_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Sonic",
              title: "Sonic the Hedgehog",
              image: Sonic_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Spawn",
              title: "Spawn",
              image: Spawn_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
          ],
        },
        {
          difficulty: "hard",
          characters: [
            {
              name: "Bender",
              title: "Futurama",
              image: Bender_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Big Boss",
              title: "Metal Gear Solid V",
              image: BigBoss_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Gandalf",
              title: "The Lord of The Rings",
              image: Gandalf_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "Genos",
              title: "One Punch Man",
              image: Genos_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },

            {
              name: "Groot",
              title: "Guardians of The Galaxy",
              image: Groot_Src,
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
          ],
        },
      ],
    },
    {
      name: "Ultimate Space Battle",
      image: UltimateSpaceBattle_Src,
      mode: [
        {
          difficulty: "easy",
          characters: [
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
          ],
        },
        {
          difficulty: "hard",
          characters: [
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
            {
              name: "",
              title: "",
              image: "",
              xCoord: "",
              yCoord: "",
              isFound: false,
            },
          ],
        },
      ],
    },
  ],
};
export default game;
