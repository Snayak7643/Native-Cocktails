import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react';
import SearchBox from '../components/SearchBox';
import CocktailsList from '../components/CocktailsList';
import Button from '../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorType } from '../../App';

type PropType = NativeStackScreenProps<StackNavigatorType, "Cocktails">;

const Home = ({navigation}:PropType) => {
  return (
    <ScrollView style = {styles.wrapper} stickyHeaderIndices={[0]}>
      <SearchBox/>
      <View style = {styles.list}>
       <CocktailsList/>
      </View>
      <View style = {styles.aboutButton}>
      <Button title = "About Us" onPress={()=>{navigation.navigate("About")}}/>
      </View>
      </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor : "rgba(192, 240, 158, 0.2)",
    },
      list :{
        marginVertical: 30,
      },
      aboutButton:{
        marginBottom:30,
      }
})