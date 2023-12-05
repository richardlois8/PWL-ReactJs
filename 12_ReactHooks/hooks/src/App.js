import "./App.css";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function App() {
  return (
    <div className="ThemeSwitcherContainer">
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
}
