import { createContext, useContext, useEffect, useState } from "react"

// Create Context
const AppCtx = createContext(null)

// Assigning App Context 
export function AppContext({children}) {
    const [theme, setTheme] = useState("light")
    const [changeCol, setChangeCol] = useState("")
    const [LoadingTrue, setLoadingTrue] = useState(true)

    return (
        <AppCtx.Provider value={{
            theme, setTheme, 
            changeCol, setChangeCol, 
            LoadingTrue, setLoadingTrue
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