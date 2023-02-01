import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Cocktail from './src/screens/Cocktail';

export type StackNavigatorType ={
 Cocktail_Details : undefined;
 Cocktails : undefined;
 About : undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorType>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name = "Cocktails" component={Home}/>
           <Stack.Screen name = "Cocktail_Details" component ={Cocktail}/>
           <Stack.Screen name = "About" component={About}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
 
const styles = StyleSheet.create({
  container : {
     flex : 1,
     justifyContent : 'space-around'
  },
  
});