import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalScreen } from '../screens/ModalScreen';
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  PullToRefreshScreen,
  CustomSectionList,
  SwitchScreen,
  TextInputScreen,
  InfiniteScrollScreen,
  SlidesScreen,
  ChangeThemeScreen,
} from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';


const Stack = createStackNavigator();


export const Navigator = () => {

  const { theme } = useContext( ThemeContext );
  
  return (

    <NavigationContainer 
      theme={theme}

    >

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            //backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PulltoRefreshScreen" component={PullToRefreshScreen} />
        <Stack.Screen name="SectionListScreen" component={CustomSectionList} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}