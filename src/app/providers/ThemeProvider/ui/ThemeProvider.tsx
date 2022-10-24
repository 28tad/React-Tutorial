import React , { FC ,useMemo,useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme ] = useState<Theme>(defaultTheme) // Значения получаем из Local Storage избегая хардкод

    const defaultProps = useMemo(() => ({ // Каждый раз не создаём новый, а исп. сущ если в массиве зав. ничего не изм.
        theme: theme, // передаем тему
        setTheme: setTheme, // функция которая эту тему будет изменять

    }), [theme]) // реагируем на изменения theme 

  return (
    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider