import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(undefined)
//Create context

export const useTheme = () => {
    return useContext(ThemeContext)
}
// Use context