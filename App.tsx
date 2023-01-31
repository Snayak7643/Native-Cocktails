import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Card from './src/components/Card';

const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Cocktails</Text>
      <Card/>
      </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
     flex : 1,
     justifyContent : "center",
     alignItems : "center"
  }
});