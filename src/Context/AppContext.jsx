import { createContext, useContext, useState } from "react"

// Create Context
const AppCtx = createContext(null)

// Assigning App Context 
export function AppContext({children}) {
    const [theme, setTheme] = useState("light")

    return (
        <AppCtx.Provider value={{
            theme, setTheme
        }}
        >
            {children}
        </AppCtx.Provider>
    )
}

// Use Context function for easy import
export function UseAppContext () {
    return useContext(AppCtx)
}