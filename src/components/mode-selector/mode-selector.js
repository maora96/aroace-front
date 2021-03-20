import React from "react";
import { ReactComponent as Sun } from "../../assets/sun-solid.svg";
import { ReactComponent as Moon } from "../../assets/moon-solid.svg";
import "./mode-selector.css";
import useDarkMode from "../../utils/theme-context";

export default function ModeSelector() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="ModeSelector text-detail dark:text-darkdetail">
      <span
        onClick={() => {
          setTheme(colorTheme);
        }}
        className="dark:bg-darksecondary bg-secondary"
      >
        {colorTheme === "dark" ? (
          <>
            <Moon width="30px" /> Dark Mode
          </>
        ) : (
          <>
            <Sun width="30px" /> Light Mode
          </>
        )}
      </span>
    </div>
  );
}
