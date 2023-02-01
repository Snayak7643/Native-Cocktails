import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useReducer} from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Cocktail from './src/screens/Cocktail';
import CocktailContext from './contexts/CocktailContext';
import { useFetchOnSearch } from './src/Hooks/useFetchOnSearch';
import cartReducer from './Reducers/cartReducer';
import { initialCartState } from './constants/initialState';
import CartContext from './contexts/CartContext';
import Cart from './src/screens/Cart';

export type StackNavigatorType ={
 Cocktail_Details : {id : number};
 Cocktails : undefined;
 About : undefined;
 Cart : undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorType>();

const App = () => {

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = useFetchOnSearch();

  return (
    <CocktailContext.Provider value = {value}>
      <CartContext.Provider value = {{state, dispatch}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cocktails">
              <Stack.Screen name = "Cocktails" component={Home}/>
              <Stack.Screen name = "Cart" component={Cart}/>
              <Stack.Screen name = "Cocktail_Details" component ={Cocktail}/>
              <Stack.Screen name = "About" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    </CartContext.Provider>
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