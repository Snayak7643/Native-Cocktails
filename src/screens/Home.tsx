import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import SearchBox from '../components/SearchBox';
import CocktailsList from '../components/CocktailsList';

const Home = () => {
  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <Text style = {styles.haeding}>Cocktails</Text>
      <SearchBox/>
      <View style = {styles.list}>
       <CocktailsList/>
      </View>
      </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
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
})