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
//UltimateSpaceBattle
import Agent47_Src from "./Assets/Characters/UltimateSpaceBattle/agent47.png";
import Astroboy_Src from "./Assets/Characters/UltimateSpaceBattle/astroboy.png";
import Cartman_Src from "./Assets/Characters/UltimateSpaceBattle/cartman.png";
import Cromulon_Src from "./Assets/Characters/UltimateSpaceBattle/cromulon.png";
import Dante_Src from "./Assets/Characters/UltimateSpaceBattle/dante.png";
import DarthVader_Src from "./Assets/Characters/UltimateSpaceBattle/darthvader.png";
import Eustass_Src from "./Assets/Characters/UltimateSpaceBattle/eustass.png";
import GhostFace_Src from "./Assets/Characters/UltimateSpaceBattle/ghostface.png";
import MBison_Src from "./Assets/Characters/UltimateSpaceBattle/mbison.png";
import ScoobyDoo_Src from "./Assets/Characters/UltimateSpaceBattle/scoobydoo.png";
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
              xCoordinate: 80,
              yCoordinate: 80,
              isFound: false,
            },
            {
              name: "Gywndolin",
              title: "Dark Souls",
              image: Gwyndolin_Src,
              xCoordinate: 21,
              yCoordinate: 97,
              isFound: false,
            },
            {
              name: "Leelo",
              title: "The Fifth Element",
              image: Leeloo_Src,
              xCoordinate: 85,
              yCoordinate: 28,
              isFound: false,
            },
            {
              name: "Neo",
              title: "The Matrix",
              image: Neo_Src,
              xCoordinate: 41,
              yCoordinate: 60,
              isFound: false,
            },
            {
              name: "Ryuk",
              title: "Death Note",
              image: Ryuk_Src,
              xCoordinate: 17,
              yCoordinate: 46,
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
              xCoordinate: 70,
              yCoordinate: 42,
              isFound: false,
            },
            {
              name: "Dio Brando",
              title: "JoJo's Bizarre",
              image: Dio_Src,
              xCoordinate: 23,
              yCoordinate: 86,
              isFound: false,
            },
            {
              name: "Hellboy",
              title: "Hellboy",
              image: Hellboy_Src,
              xCoordinate: 9,
              yCoordinate: 95,
              isFound: false,
            },
            {
              name: "Predator",
              title: "The Predator",
              image: Predator_Src,
              xCoordinate: 95,
              yCoordinate: 67,
              isFound: false,
            },
            {
              name: "Spiderman",
              title: "The Spiderman",
              image: Spiderman_Src,
              xCoordinate: 65,
              yCoordinate: 93,
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
              xCoordinate: 28,
              yCoordinate: 69,
              isFound: false,
            },
            {
              name: "Guts",
              title: "Berserk",
              image: Guts_Src,
              xCoordinate: 49,
              yCoordinate: 90,
              isFound: false,
            },
            {
              name: "Kratos",
              title: "God of War",
              image: Kratos_Src,
              xCoordinate: 46,
              yCoordinate: 33,
              isFound: false,
            },
            {
              name: "Sonic",
              title: "Sonic the Hedgehog",
              image: Sonic_Src,
              xCoordinate: 73,
              yCoordinate: 68,
              isFound: false,
            },
            {
              name: "Spawn",
              title: "Spawn",
              image: Spawn_Src,
              xCoordinate: 32,
              yCoordinate: 59,
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
              xCoordinate: 91,
              yCoordinate: 70,
              isFound: false,
            },
            {
              name: "Big Boss",
              title: "Metal Gear Solid V",
              image: BigBoss_Src,
              xCoordinate: 68,
              yCoordinate: 47,
              isFound: false,
            },
            {
              name: "Gandalf",
              title: "The Lord of The Rings",
              image: Gandalf_Src,
              xCoordinate: 59,
              yCoordinate: 37,
              isFound: false,
            },
            {
              name: "Genos",
              title: "One Punch Man",
              image: Genos_Src,
              xCoordinate: 32,
              yCoordinate: 65,
              isFound: false,
            },

            {
              name: "Groot",
              title: "Guardians of The Galaxy",
              image: Groot_Src,
              xCoordinate: 59,
              yCoordinate: 72,
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
              name: "Astro Boy",
              title: "Astro Boy",
              image: Astroboy_Src,
              xCoordinate: 91,
              yCoordinate: 37,
              isFound: false,
            },
            {
              name: "Cromulon",
              title: "Rick & Morty",
              image: Cromulon_Src,
              xCoordinate: 95,
              yCoordinate: 85,
              isFound: false,
            },
            {
              name: "Dante",
              title: "Devil May Cry",
              image: Dante_Src,
              xCoordinate: 27,
              yCoordinate: 70,
              isFound: false,
            },
            {
              name: "Darth Vader",
              title: "Star Wars",
              image: DarthVader_Src,
              xCoordinate: 82,
              yCoordinate: 59,
              isFound: false,
            },
            {
              name: "M.Bison",
              title: "Street Fighter",
              image: MBison_Src,
              xCoordinate: 68,
              yCoordinate: 65,
              isFound: false,
            },
          ],
        },
        {
          difficulty: "hard",
          characters: [
            {
              name: "Agent 47",
              title: "Hitman",
              image: Agent47_Src,
              xCoordinate: 75,
              yCoordinate: 57,
              isFound: false,
            },
            {
              name: "Cartman",
              title: "South Park",
              image: Cartman_Src,
              xCoordinate: 58,
              yCoordinate: 95,
              isFound: false,
            },
            {
              name: "Eustass",
              title: "Courage the Cowardly Dog",
              image: Eustass_Src,
              xCoordinate: 30,
              yCoordinate: 54,
              isFound: false,
            },
            {
              name: "Ghost Face",
              title: "Scream",
              image: GhostFace_Src,
              xCoordinate: 53,
              yCoordinate: 27,
              isFound: false,
            },
            {
              name: "Scooby Doo",
              title: "Scooby-Doo Where Are You!",
              image: ScoobyDoo_Src,
              xCoordinate: 49,
              yCoordinate: 77,
              isFound: false,
            },
          ],
        },
      ],
    },
  ],
};
export default game;
