import 'react-native-gesture-handler';
import React, { Children } from 'react'
// import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


// const customTheme: Theme = {
//   dark:true,
//   colors:{
//     ...DarkTheme.colors
//     // primary: 'string',
//     // background: 'string',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
//   }
// }

const App = () => {
  return (
    <AppState>

        <Navigator />

    </AppState>

  )
}


const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;