import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import React, { useState, useEffect } from "react";

const Header = ({ theme, setTheme }) => {

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  let changeF = () => {
    if (theme === "dark") {
      theme = "light";
      setTheme(theme);
    } else if (theme === "light") {
      theme = "dark";
      setTheme(theme);
    }
    return theme;
  };

  return (
    <div className="app-header">
      <h1>Notes List</h1>
      <button onClick={changeF}>{theme === "dark" ? <Sun /> : <Moon />}</button>
    </div>
  );
};

export default Header;
