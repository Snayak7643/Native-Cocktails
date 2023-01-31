import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';


const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Home/>
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
     flex : 1,
     justifyContent : 'space-around'
  },
  
});