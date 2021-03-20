import React from "react";

// const getInitialTheme = () => {
//   if (localStorage) {
//     const storedPrefs = localStorage.getItem("current-theme");
//     if (typeof storedPrefs === "string") {
//       return storedPrefs;
//     }
//     if (matchMedia("(prefers-color-scheme: dark").matches) {
//       return "dark";
//     }
//   }
//   return "light";
// };

// export const ThemeProvider = ({initialTheme, children}) => {
//     const [theme, setTeheme] = React.useState(getInitialTheme);

//     const checkTheme = (existing) => {
//         const root = window.documentEl
//     }
// }

export default function useDarkMode() {
  const [theme, setTheme] = React.useState("dark");

  const colorTheme = theme === "dark" ? "light" : "dark";

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);
  return [colorTheme, setTheme];
}
