import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useCallback, useState, useEffect, EventHandler} from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Cocktail from './src/screens/Cocktail';
import CocktailContext from './contexts/CocktailContext';
import { useFetchOnSearch } from './src/Hooks/useFetchOnSearch';

export type StackNavigatorType ={
 Cocktail_Details : {id : number};
 Cocktails : undefined;
 About : undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorType>();

const App = () => {

  const value = useFetchOnSearch();

  return (
    <CocktailContext.Provider value = {value}>
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name = "Cocktails" component={Home}/>
           <Stack.Screen name = "Cocktail_Details" component ={Cocktail}/>
           <Stack.Screen name = "About" component={About}/>
        </Stack.Navigator>
    </NavigationContainer>
    </CocktailContext.Provider>
  );
};

export default App;
 
const styles = StyleSheet.create({
  container : {
     flex : 1,
     justifyContent : 'space-around'
  },
  
});