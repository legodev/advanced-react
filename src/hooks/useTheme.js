import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(undefined)

export const useTheme = () => {
    return useContext(ThemeContext)
}