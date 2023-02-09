import { createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { themeReducer, ThemeState, lighTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}





export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({ children }: any) => {

    // tema segun la elección del SO
    const colorScheme = useColorScheme();


    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lighTheme) //TODO: Leer el tema global del movil

    // tema segun la elección del SO
    useEffect(() => {
        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme()
    }, [colorScheme])


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('setDarkTheme');
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('setLightTheme');
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,

        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}