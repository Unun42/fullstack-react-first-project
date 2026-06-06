import { createContext } from "react";

type ThemeType = { theme: string, toggleTheme: () => void };

// Creates context for provider to expose
const ThemeContext = createContext<ThemeType | null>(null);
export default ThemeContext;
