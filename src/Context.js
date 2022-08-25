import { createContext, useState } from "react"

export const DarkTheme = createContext()

export const DarkThemeProvider = ({children}) => {

    const [mode, setMode] = useState("light")

    return (
        <DarkTheme.Provider value={{mode, setMode}} >
            {children}
        </DarkTheme.Provider>
    )
}