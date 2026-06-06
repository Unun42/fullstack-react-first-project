import { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";


// centralizes nullguard and makes consumption cleaner
const useTheme = () => {
    const context = useContext(ThemeContext);

    // Throws if consumed outside of ProductProvider
    if (context === null) {
        throw new Error ("useTheme must be used within ThemeProvider's reach");
    }

    return context;
};
export default useTheme;