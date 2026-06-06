import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import type { ReactNode } from "react";

type ThemeProviderProps = { children: ReactNode; };

// Distributes context, owns state, updates DOM class, persists
const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [ theme, setTheme ] = useState(document.documentElement.classList.contains("dark") 
        ? "dark" 
        : "light"
    );

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // SYNCS storage and HTML, targets html as Tailwind's dark mode selector is html.dark, not body.dark
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;

// Used like this in other components: 
// const { theme, toggleTheme } = useTheme();
// return ( button onClick={toggleTheme} ... )