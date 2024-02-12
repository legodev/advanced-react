import { ThemeContext } from '../hooks/useTheme'
import { useState } from 'react'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
