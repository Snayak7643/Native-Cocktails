import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CocktailsList from './src/components/CocktailsList';
import SearchBox from './src/components/SearchBox';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
      <Text style = {styles.haeding}>Cocktails</Text>
      <SearchBox/>
      <View style = {styles.list}>
       <CocktailsList/>
      </View>
      </ScrollView>
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
    elevation: 10,
  },
  list :{
    marginVertical: 30,
  }
});