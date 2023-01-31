import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CocktailsList from './src/components/CocktailsList';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.haeding}>Cocktails</Text>
      <View style = {styles.list}>
       <CocktailsList/>
      </View>
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
     flex : 1,
     justifyContent : 'space-around'
  },
  haeding :{
    fontWeight:"bold",
    fontSize : 20,
    textAlign : "center",
    marginVertical : 10,
  },
  list :{
    marginVertical: 30,
  }
});