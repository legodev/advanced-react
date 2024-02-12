import { ThemeContext } from '../hooks/useTheme'

export default function ThemeProvider({ value, children }) {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
