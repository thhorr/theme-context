import {createContext, useState} from "react";


const ThemeContext = createContext();


const ThemeContextProvider = ({children}) => {


    const [dark, setDark] = useState(false)
    const [light, setLight] = useState(true);
    

    const toggleTheme = (dark, light) => {
        setDark(!dark)
        setLight(!light)
    }






    return <ThemeContext.Provider value = {{dark, light,  toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}


export {ThemeContextProvider, ThemeContext};