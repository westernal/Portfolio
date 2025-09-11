"use client";

import { DarkIcon, LightIcon } from "@/utils/icons";
import { useState } from "react";

const ThemeButton = () => {
  const [isLight, setIsLight] = useState(false);

  const changeTheme = () => {
    setIsLight(!isLight);

    document.getElementById("root-layout")?.classList.toggle("light");
  };
  return (
    <button
      className="theme-btn"
      onClick={changeTheme}
      aria-label="Toggle theme button"
    >
      {isLight ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default ThemeButton;
