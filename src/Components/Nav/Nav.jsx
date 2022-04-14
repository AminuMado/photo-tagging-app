import React, { useState } from "react";
import Home_Src from "../../Assets/Misc/home.png";
import Leaderboard_Src from "../../Assets/Misc/leaderboard.png";
import { Link } from "react-router-dom";
function Nav({ active }) {
  const [show, setShow] = useState(false);
  const styles = {
    default:
      "w-12 invert-[.25] hover:invert cursor-pointer hover:scale-105 transition-all duration-200 m-2",
    active: "w-12 invert m-2",
  };
  const navList = [
    { name: "Home", src: Home_Src, link: "/" },
    { name: "Leaderboard", src: Leaderboard_Src, link: "/Leaderboard" },
  ];
  const navItems = navList.map((item) => {
    return (
      <Link to={item.link} key={item.name} className="relative">
        <div
          className={`absolute -bottom-5 left-1/2 -translate-x-1/2 duration-1000 text-yellow-400
          ${show === item.name ? "opacity-100" : "opacity-0"}`}
        >
          {item.name}
        </div>
        <img
          src={item.src}
          alt={item.name}
          className={
            active === item.name ? `${styles.active}` : `${styles.default}`
          }
          onMouseEnter={() => setShow(item.name)}
          onMouseLeave={() => setShow(false)}
        />
      </Link>
    );
  });

  return (
    <div className="flex p-6 gap-6 justify-center items-center">{navItems}</div>
  );
}
export default Nav;
