import { createContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    toogleTheme: () => {}
})

export default ThemeContext;