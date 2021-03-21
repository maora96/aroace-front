import React from "react";
import { ReactComponent as Sun } from "../../assets/sun-solid.svg";
import { ReactComponent as Moon } from "../../assets/moon-solid.svg";
import "./mode-selector.css";
import useDarkMode, { ThemeProvider } from "../../utils/theme-context";
import { ThemeContext } from "../../utils/theme-context";

export default function ModeSelector() {
  //   const [colorTheme, setTheme] = useDarkMode();

  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="ModeSelector text-detail dark:text-darkdetail">
      {theme === "light" ? (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="dark:bg-darksecondary bg-secondary"
        >
          <Moon width="30px" /> Dark Mode
        </span>
      ) : (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="dark:bg-darksecondary bg-secondary"
        >
          <Sun width="30px" /> Light Mode
        </span>
      )}
    </div>
  );
}
