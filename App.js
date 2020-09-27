import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';
import AboutmeScreen from './components/AboutmeScreen';
const Stack = createStackNavigator();

export default function App() {
  return (       
      <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} >
        <Stack.Screen name="Choose a zip code" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="About me" component={AboutmeScreen} /> 
      </Stack.Navigator> 
      </NavigationContainer> 
  );
}