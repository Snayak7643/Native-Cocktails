import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useCallback, useState, useEffect} from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Cocktail from './src/screens/Cocktail';
import {cocktailType} from "./types";
import { ALL_URL } from './constants/URL';
import CocktailContext from './contexts/CocktailContext';

export type StackNavigatorType ={
 Cocktail_Details : {id : number};
 Cocktails : undefined;
 About : undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorType>();

const App = () => {

  const [cocktails, setCocktails] = useState<cocktailType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      console.log("fetching");
      const response = await fetch(ALL_URL);
      const res = await response.json();
      if (res.drinks) {
        const desiredCocktails = res.drinks.map((drink: any) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
          };
        });
        setCocktails(desiredCocktails);
        setLoading(false);
        return;
      }
      setCocktails([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(()=>{
    fetchCocktails();
  },[]);

  return (
    <CocktailContext.Provider value = {{cocktails, loading, searchTerm : "", handleChange : ()=>{}}}>
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