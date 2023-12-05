import { useContext } from "react";
import ThemeContext from "./ThemeContext";
export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p className="themeTitleText">Current theme: {theme}</p>
      <button onClick={toggleTheme} className={theme + "ButtonTheme"}>
        Toggle Theme
      </button>
    </div>
  );
};
